/* eslint-disable no-loop-func */
export type RestStrategy = 'keep' | 'omit'

/**
 * @example variableChunkString(someLongText, [46, 65, 72])
 * @param str
 * @param chunkSizes
 * @param restStrategy
 * @returns
 * @category string
 * @module variableChunkString
 */
const variableChunkString = (str: string, chunkSizes: number[], restStrategy: RestStrategy = 'omit'): string[] => {
  const chunks: string[] = []
  let words = str.split(' ')

  // For each line
  chunkSizes.forEach((size, i, arr) => {
    const lineWords = []
    while (lineWords.join(' ').length <= size && words.length > 0) {
      const word = words.shift()
      if (word?.length && word?.length > size) {
        const shortenWord = word?.substr(0, size)
        words = [word?.substr(size), ...words]
        lineWords.push(shortenWord)
        // Go to next line
        break
      } else {
        lineWords.push(word)
      }
    }

    if (i + 1 === arr.length && words.length > 0) {
      if (restStrategy === 'keep') lineWords.push(...words)
      if (restStrategy === 'omit') lineWords.push('...')
    }

    chunks.push(lineWords.join(' '))
  })

  return chunks
}

export default variableChunkString