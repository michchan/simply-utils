import { ClipboardEvent } from 'react'
/**
 * @category dom
 * @module getFilesFromClipboardEvent
 */
const getFilesFromClipboardEvent = (e: ClipboardEvent): File[] => Array.from(
  e.clipboardData?.files ?? []
)

export default getFilesFromClipboardEvent