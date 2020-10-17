import isFullWidthChar from "./isFullWIdthChar"

/**
 * Truncate string with handling of full width characters (e.g. Chinese/Japanese)
 * 
 * @param {string} str 
 * @param {Object} options 
 * 
 * @returns {string}
 */
const truncate = (
  str: string = '', 
  options: {
    length: number;
    omission?: string;
  },
): string => {  
  const {
    length: maxLength,
    omission,
  } = options

  let length = 0
  let charIndex = 0
  let truncatedStr = ''
  do {
    const char = (str || '')[charIndex] || ''

    if (isFullWidthChar(char)) {
      if (length + 2 > maxLength)
        break;

      length += 2
    } else {
      length += 1
    }

    truncatedStr += char
    charIndex++
  } while (length < maxLength)

  return `${truncatedStr}${(str || '').length !== truncatedStr.length? omission || '...' : ''}`
}

export default truncate
