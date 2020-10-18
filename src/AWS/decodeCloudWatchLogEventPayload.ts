import { CloudWatchLogsDecodedData, CloudWatchLogsEvent } from "aws-lambda"
import zlib from 'zlib'


const decodeCloudWatchLogEventPayload = (event: CloudWatchLogsEvent): CloudWatchLogsDecodedData => {
  const compressedPayload = Buffer.from(event.awslogs.data, 'base64')
  const uncompressedPayload = zlib.unzipSync(compressedPayload).toString()
  return JSON.parse(uncompressedPayload)
}

export default decodeCloudWatchLogEventPayload
