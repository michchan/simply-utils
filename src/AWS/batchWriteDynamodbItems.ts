import { DynamoDB } from 'aws-sdk'
import chunk from 'lodash/chunk'
import pipeAsync from '../async/pipeAsync'

const CHUNK_SIZE = 25

export type BatchWriteChunkResult = DynamoDB.DocumentClient.BatchWriteItemOutput
export type BatchWriteDynamoDBItemsResult = BatchWriteChunkResult[]

type PT = DynamoDB.DocumentClient.PutRequest
type DT = DynamoDB.DocumentClient.DeleteRequest

export interface BatchWriteDynamoDBItemsOptions <T, RT extends PT | DT> {
  docClient: Pick<DynamoDB.DocumentClient, 'batchWrite'>;
  records: T[];
  tableName: string;
  mode: 'put' | 'delete';
  serialize?: (item: T) => RT;
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
function batchWriteDynamodbItems <T, RT extends PT | DT> ({
  docClient,
  records,
  tableName,
  mode,
  serialize,
  requestsMode = 'parallel',
}: BatchWriteDynamoDBItemsOptions<T, RT>): Promise<BatchWriteDynamoDBItemsResult | null> {
  if (records.length === 0) return Promise.resolve(null)

  // Chunk records by 25 which is the max number of items DynamoDB can batch write.
  const chunks = chunk(records, CHUNK_SIZE)
  const asyncFuncs = chunks.map(chunkedRecords => (): Promise<BatchWriteChunkResult> => {
    // Create items
    const items = chunkedRecords.map(rec => ({
      [mode === 'put' ? 'PutRequest' : 'DeleteRequest']: (
        serialize ? serialize(rec) : serialize
      ) as unknown as RT,
    }))
    // Create request items
    const RequestItems: DynamoDB.DocumentClient.BatchWriteItemInput['RequestItems'] = {
      [tableName]: items,
    }
    // Send batch create requests
    return docClient.batchWrite({ RequestItems }).promise()
  })

  // Send batch requests with pipe
  if (requestsMode === 'pipe')
    return pipeAsync<BatchWriteChunkResult>(...asyncFuncs)()
  // Send batch requests in parallel for each chunk
  return Promise.all(asyncFuncs.map(func => func()))
}
export default batchWriteDynamodbItems