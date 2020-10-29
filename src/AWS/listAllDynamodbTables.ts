import { DynamoDB } from 'aws-sdk'
import wait from '../async/wait'

export type ListAllTablesResult = DynamoDB.TableNameList

export interface ListAllDynamodbTablesOptions {
  Limit?: DynamoDB.ListTablesInput['Limit'];
  accTableNames?: DynamoDB.TableNameList;
  /** Delay between each query request. Default to 0 */
  delay?: number;
}

/**
 * List table recursively
 */
const listAllDynamodbTables = (
  dynamodb: Pick<DynamoDB, 'listTables'>,
  ExclusiveStartTableName: string,
  {
    Limit,
    accTableNames = [],
    delay = 0,
  }: ListAllDynamodbTablesOptions = {}
): Promise<ListAllTablesResult> => new Promise((resolve, reject) => {
  dynamodb.listTables({
    ExclusiveStartTableName,
    Limit,
  }, async (err, data) => {
    if (err) {
      reject(new Error(`Unable to list tables. Error JSON: ${err}`))
    } else {
      const { TableNames = [], LastEvaluatedTableName } = data
      const mergedTableNames = [...accTableNames, ...TableNames]

      if (LastEvaluatedTableName) {
        if (delay > 0) await wait(delay)
        // Recur next
        resolve(await listAllDynamodbTables(
          dynamodb,
          ExclusiveStartTableName,
          {
            Limit,
            accTableNames: mergedTableNames,
            delay,
          }
        ))
      } else {
        // End recur
        resolve(mergedTableNames)
      }
    }
  })
})

export default listAllDynamodbTables