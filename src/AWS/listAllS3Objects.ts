import { S3 } from 'aws-sdk'
import wait from '../async/wait'

export type ListAllS3ObjectsResult = S3.ListObjectsV2Output

export interface ConcatDataOptions {
  /**
   * Accumulated object list to be concentenated with the result.
   * Default to an empty array.
   */
  accContents?: S3.ObjectList;
  /** Accumulated "KeyCount" to be sum-up with the result. Default to 0. */
  accKeyCount?: number;
  /** Accumulated "MaxKeys" to be sum-up with the result. Default to 0. */
  accMaxKeys?: number;
}
const getDataConcatener = ({
  accContents = [],
  accKeyCount = 0,
  accMaxKeys = 0,
}: ConcatDataOptions) => (data: ListAllS3ObjectsResult): ListAllS3ObjectsResult => {
  const {
    Contents = [],
    KeyCount = 0,
    MaxKeys = 0,
  } = data
  const concatedContents = [...accContents, ...Contents]
  const sumKeyCount = accKeyCount + KeyCount
  const sumMaxKeys = accMaxKeys + MaxKeys
  return {
    ...data,
    Contents: concatedContents,
    KeyCount: sumKeyCount,
    MaxKeys: sumMaxKeys,
  }
}

export interface ListAllS3Options extends ConcatDataOptions {
  MaxKeys?: S3.ListObjectsV2Request['MaxKeys'];
  /** Delay between each query request. Default to 0 */
  delay?: number;
  /** Other input to override */
  input?: Partial<S3.ListObjectsV2Request>;
}
/**
 * List S3 objects recursively
 * @category AWS
 * @module listAllS3Objects
 * @category AWS
 * @module listAllS3Objects
 */
const listAllS3Objects = (
  s3: Pick<S3, 'listObjectsV2'>,
  bucketName: S3.ListObjectsV2Request['Bucket'],
  options: ListAllS3Options = {},
): Promise<ListAllS3ObjectsResult> => new Promise((resolve, reject) => {
  const {
    MaxKeys,
    delay = 0,
    input,
    ...restOptions
  } = options

  const concatData = getDataConcatener(restOptions)

  s3.listObjectsV2({
    Bucket: bucketName,
    MaxKeys,
    ...input,
  }, async (err, data) => {
    if (err) {
      reject(new Error(`Unable to list S3 Objects. Error JSON: ${err}`))
    } else {
      const concatedData = concatData(data)
      if (concatedData.NextContinuationToken) {
        if (delay > 0) await wait(delay)
        // Recur next
        resolve(await listAllS3Objects(s3, bucketName, {
          ...options,
          accContents: concatedData.Contents,
          accKeyCount: concatedData.KeyCount,
          accMaxKeys: concatedData.MaxKeys,
        }))
      } else {
        // End recur
        resolve(concatedData)
      }
    }
  })
})
export default listAllS3Objects