import { DynamoDB } from 'aws-sdk';
import chunk from 'lodash/chunk'

export type BatchWriteChunkResult = DynamoDB.DocumentClient.BatchWriteItemOutput
export type BatchWriteResult = BatchWriteChunkResult[]

type PT = DynamoDB.DocumentClient.PutRequest
type DT = DynamoDB.DocumentClient.DeleteRequest

/**
 * Batch write items to dynamoDB with handling for maximum items (25) to write, 
 * which means with this helper more than 25 items can be written into the database with one call.
 */
async function batchWriteDynamodbItems <T, RT extends PT | DT> (
  docClient: Pick<DynamoDB.DocumentClient, 'batchWrite'>,
  records: T[],
  tableName: string,
  mode: 'put' | 'delete',
  serialize?: (item: T) => RT,
): Promise<BatchWriteResult | null> {
  if (records.length === 0) return null

  // Chunk records by 25 which is the max number of items DynamoDB can batch write.
  const chunks = chunk(records, 25)
  // Send batch requests for each chunk
  return Promise.all(
    chunks.map((chunkedRecords, index): Promise<BatchWriteChunkResult> => {
      // Create items
      const items = chunkedRecords.map(rec => ({
        [mode === 'put' ? 'PutRequest' : 'DeleteRequest']: (
          serialize ? serialize(rec) : serialize
        ) as unknown as RT,
      }))
      // Create request items
      const RequestItems: DynamoDB.DocumentClient.BatchWriteItemInput['RequestItems'] = {
        [tableName]: items
      }
      // Log to console 
      console.log(`Batch Write Request Items (chunk: ${index}, length: ${items.length}): `, JSON.stringify(RequestItems, null, 2))

      // Send batch create requests
      return docClient.batchWrite({ RequestItems }).promise()
    }) 
  )
}
export default batchWriteDynamodbItems
