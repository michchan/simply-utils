import type { ClipboardEvent } from 'react'


const getFilesFromClipboardEvent = (e: ClipboardEvent): File[] => {
  return Array.from(e.clipboardData?.files ?? [])
}

export default getFilesFromClipboardEvent
