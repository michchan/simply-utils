import { DynamoDB, AWSError } from 'aws-sdk';

/**
 * Return a list of properties of tables that have been created and match the criteria
 */
function queryOrScanAllDynamodbItems <
    Input extends DynamoDB.DocumentClient.QueryInput | DynamoDB.DocumentClient.ScanInput,
    Output extends DynamoDB.DocumentClient.QueryOutput | DynamoDB.DocumentClient.ScanOutput,
> (
    docClient: DynamoDB.DocumentClient,
    method: 'scan' | 'query',
    input: Input,
    previousResult: null | Output = null,
): Promise<Output> {
    return new Promise((resolve, reject) => {
        docClient[method](input, async (err, data) => {
            if (err) {
                reject(new Error(`Unable to query items. Error JSON: ${err}`));
            } else {
                // Merge results
                const mergedResults = mergeResults<Output>(previousResult, data as Output)
                
                if (data.LastEvaluatedKey) {
                    resolve(await queryOrScanAllDynamodbItems<Input, Output>(docClient, method, {
                        ...input,
                        ExclusiveStartKey: data.LastEvaluatedKey,
                    }, mergedResults))
                } else {
                    // Merge with previousResult
                    resolve(mergedResults)
                }
            }
        })
    })
}
export default queryOrScanAllDynamodbItems


/** Merge previous and next results */
function mergeResults <Output extends DynamoDB.DocumentClient.QueryOutput | DynamoDB.DocumentClient.ScanOutput> (
    previousResult: null | Output, 
    nextResult: Output
): Output {
    if (!previousResult) return nextResult
    return {
        ...nextResult,
        Items: [...previousResult.Items ?? [], ...nextResult.Items ?? []],
        Count: (previousResult.Count ?? 0) + (nextResult.Count ?? 0),
        ScannedCount: (previousResult.ScannedCount) ?? 0 + (nextResult.ScannedCount ?? 0),
    }
}