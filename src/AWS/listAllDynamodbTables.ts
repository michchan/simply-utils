import { DynamoDB } from 'aws-sdk';


export type Result = DynamoDB.TableNameList

/**
 * List table recursively
 */
const listAllDynamodbTables = (
    dynamodb: DynamoDB,
    ExclusiveStartTableName: string,
    Limit?: DynamoDB.ListTablesInput['Limit'],
    accTableNames: DynamoDB.TableNameList = [],
): Promise<Result> => new Promise((resolve, reject) => {
    dynamodb.listTables({
        ExclusiveStartTableName,
        Limit,
    }, async (err, data) => {
        if (err) {
            reject(new Error(`Unable to list tables. Error JSON: ${err}`));
        } else {
            const { TableNames = [], LastEvaluatedTableName } = data
            const mergedTableNames = [...accTableNames, ...TableNames]

            if (LastEvaluatedTableName) {
                // recur next
                resolve(await listAllDynamodbTables(
                    dynamodb,
                    ExclusiveStartTableName,
                    Limit,
                    mergedTableNames,
                ))
            } else {
                // End recur
                resolve(mergedTableNames);
            }
        }
    })
})

export default listAllDynamodbTables