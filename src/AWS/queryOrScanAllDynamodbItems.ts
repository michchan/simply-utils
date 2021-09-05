import { DynamoDB } from 'aws-sdk'
import wait from '../async/wait'

type QI = DynamoDB.DocumentClient.QueryInput
type QO = DynamoDB.DocumentClient.QueryOutput
type SI = DynamoDB.DocumentClient.ScanInput
type SO = DynamoDB.DocumentClient.ScanOutput

/** Merge previous and next results */
function mergeResults <Output extends QO | SO> (
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

export interface QueryOrScanAllDynamodbItemsOptions <Output extends QO | SO> {
  previousResult?: null | Output;
  /** Delay between each query request. Default to 0 */
  delay?: number;
}

/**
 * Return a list of properties of tables that have been created and match the criteria
 * @category AWS
 * @module queryOrScanAllDynamodbItems
 */
function queryOrScanAllDynamodbItems <
  Input extends QI | SI,
  Output extends QO | SO
> (
  docClient: Pick<DynamoDB.DocumentClient, 'scan' | 'query'>,
  method: 'scan' | 'query',
  input: Input,
  {
    previousResult = null,
    delay = 0,
  }: QueryOrScanAllDynamodbItemsOptions<Output> = {}
): Promise<Output> {
  return new Promise((resolve, reject) => {
    docClient[method](input, async (err, data) => {
      if (err) {
        reject(new Error(`Unable to query items. Error JSON: ${err}`))
      } else {
        // Merge results
        const mergedResults = mergeResults<Output>(previousResult, data as Output)

        if (data.LastEvaluatedKey) {
          if (delay > 0) await wait(delay)
          // Recur next
          resolve(await queryOrScanAllDynamodbItems<Input, Output>(docClient, method, {
            ...input,
            ExclusiveStartKey: data.LastEvaluatedKey,
          }, {
            previousResult: mergedResults,
            delay,
          }))
        } else {
          // Merge with previousResult
          resolve(mergedResults)
        }
      }
    })
  })
}
export default queryOrScanAllDynamodbItems