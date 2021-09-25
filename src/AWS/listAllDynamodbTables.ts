import { DynamoDB } from 'aws-sdk'
import wait from '../async/wait'

export type ListAllTablesResult = DynamoDB.ListTablesOutput

export interface ListAllDynamodbTablesOptions {
  Limit?: DynamoDB.ListTablesInput['Limit'];
  /** Delay between each query request. Default to 0 */
  delay?: number;
  /** Other input to override */
  input?: Partial<DynamoDB.ListTablesInput>;
  /**
   * Accumulated table names to be concentenated with the result.
   * Default to an empty array.
   */
  accTableNames?: DynamoDB.TableNameList;
}
/**
 * List table recursively
 * @category AWS
 * @module listAllDynamodbTables
 * @category AWS
 * @module listAllDynamodbTables
 */
const listAllDynamodbTables = (
  dynamodb: Pick<DynamoDB, 'listTables'>,
  ExclusiveStartTableName: string,
  options: ListAllDynamodbTablesOptions = {}
): Promise<ListAllTablesResult> => new Promise((resolve, reject) => {
  const {
    Limit,
    delay = 0,
    input,
    accTableNames = [],
  } = options

  dynamodb.listTables({
    ExclusiveStartTableName,
    Limit,
    ...input,
  }, async (err, data) => {
    if (err) {
      reject(new Error(`Unable to list tables. Error JSON: ${err}`))
    } else {
      const { TableNames = [], LastEvaluatedTableName } = data
      const concatedTableNames = [...accTableNames, ...TableNames]

      if (LastEvaluatedTableName) {
        if (delay > 0) await wait(delay)
        // Recur next
        resolve(await listAllDynamodbTables(dynamodb, ExclusiveStartTableName, {
          ...options,
          accTableNames: concatedTableNames,
        }))
      } else {
        // End recur
        resolve({ ...data, TableNames: concatedTableNames })
      }
    }
  })
})
export default listAllDynamodbTables