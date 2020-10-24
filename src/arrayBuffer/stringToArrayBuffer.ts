// 2 bytes for each char
const BYTES_PER_CHAR = 2

/**
 * Reference: https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
 * @param str
 */
export function stringToArrayBuffer (str: string): ArrayBuffer {
  const buf = new ArrayBuffer(str.length * BYTES_PER_CHAR)
  const bufView = new Uint8Array(buf)
  for (
    let i = 0, strLen = str.length;
    i < strLen;
    i++
  )
    bufView[i] = str.charCodeAt(i)

  return buf
}

export default stringToArrayBuffer