/**
 * !! Caution: runtime will be blocked if using this for a large buffer (large file like 1GB)
 *
 * @param buf The array buffer data
 * @param contentType The MIME type .e.g text/plain
 * @category arrayBuffer
 * @module arrayBufferToBase64DataUrl
 */
export function arrayBufferToBase64DataUrl (buf: ArrayBuffer, contentType: string): string {
  const base64 = Buffer.from(buf).toString('base64')
  const dataUrl = `data:${contentType};base64, ${encodeURIComponent(base64)}`
  return dataUrl
}

export default arrayBufferToBase64DataUrl