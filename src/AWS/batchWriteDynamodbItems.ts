import { DynamoDB } from 'aws-sdk'
import chunk from 'lodash/chunk'
import pipeAsync from '../async/pipeAsync'

const CHUNK_SIZE = 25

export type BatchWriteChunkResult = DynamoDB.DocumentClient.BatchWriteItemOutput
export type BatchWriteDynamoDBItemsResult = BatchWriteChunkResult[]
type RArr = BatchWriteDynamoDBItemsResult

export interface BatchWriteDynamoDBItemsOptions <T> {
  docClient: Pick<DynamoDB.DocumentClient, 'batchWrite'>;
  records: T[];
  tableName: string;
  mode: 'put' | 'delete';
  serialize?: (item: T) => DynamoDB.DocumentClient.AttributeMap;
  /**
   * 'parallel': Request using Promise.all for every batch request
   * 'pipe': Pipe each batch request
   * Default to 'parallel'.
   */
  requestsMode?: 'parallel' | 'pipe';
}
/**
 * Batch write items to dynamoDB with handling for maximum items (25) to write,
 * which means with this helper more than 25 items can be written into the database with one call.
 */
function batchWriteDynamodbItems <T> ({
  docClient,
  records,
  tableName,
  mode,
  serialize,
  requestsMode = 'parallel',
}: BatchWriteDynamoDBItemsOptions<T>): Promise<BatchWriteDynamoDBItemsResult | null> {
  if (records.length === 0) return Promise.resolve(null)

  // Chunk records by 25 which is the max number of items DynamoDB can batch write.
  const chunks = chunk(records, CHUNK_SIZE)

  const sendRequest = (chunkedRecords: T[]) => {
    // Create items
    const items = chunkedRecords.map(rec => ({
      [mode === 'put' ? 'PutRequest' : 'DeleteRequest']: {
        [mode === 'put' ? 'Item' : 'Key']: (
          serialize ? serialize(rec) : rec
        ),
      },
    }))
    // Create request items
    const RequestItems: DynamoDB.DocumentClient.BatchWriteItemInput['RequestItems'] = {
      [tableName]: items,
    }
    // Send batch create requests
    return docClient.batchWrite({ RequestItems }).promise()
  }

  const pipedFuncs = chunks.map(chunkedRecords => async (input: RArr = []): Promise<RArr> => {
    const output = await sendRequest(chunkedRecords)
    return [...input, output]
  })

  // Send batch requests with pipe
  if (requestsMode === 'pipe')
    return pipeAsync<RArr>(...pipedFuncs)([])

  // Send batch requests in parallel for each chunk
  return Promise.all(chunks.map(sendRequest))
}
export default batchWriteDynamodbItems