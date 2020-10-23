import { ClipboardEvent } from 'react'

const getFilesFromClipboardEvent = (e: ClipboardEvent): File[] => Array.from(e.clipboardData?.files ?? [])

export default getFilesFromClipboardEvent