const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const CHARS_LENGTH = CHARS.length

/**
 * Reference: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 * @category string
 * @module generateRandomString
 */
const generateRandomString = (length: number = 9): string => {
  let result = ''

  for (let i = 0; i < length; i++)
    result += CHARS.charAt(Math.floor(Math.random() * CHARS_LENGTH))

  return result
}

export default generateRandomString