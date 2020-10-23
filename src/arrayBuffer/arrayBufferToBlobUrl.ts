/**
 * Create an object URL from an array buffer.
 *
 * @param buffer The array buffer
 * @param type MIME type
 * @returns The object URL
 */
export function arrayBufferToBlobUrl (buffer: ArrayBuffer, type: BlobPropertyBag['type']): string {
  const bytes = new Uint8Array(buffer)
  const blob = new Blob([bytes], { type })
  return window.URL.createObjectURL(blob)
}

export default arrayBufferToBlobUrl