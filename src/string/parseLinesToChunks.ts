/**
 * Parse lines of text to chunks of messages according to the max length of each chunk
 */
const parseLinesToChunks = (
  lines: string[],
  maxLength: number,
): string[] => lines.reduce((chunks: string[], line) => {
  const rest = [...chunks]
  const chunk = rest.pop() ?? ''
  const testChunk = [chunk, line].join('\n')

  if (testChunk.length > maxLength) return [...rest, chunk, line]

  return [...rest, testChunk]
}, [])

export default parseLinesToChunks