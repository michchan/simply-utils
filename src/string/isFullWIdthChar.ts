import eaw from 'eastasianwidth'


/**
 * Whether the character is full width character (e.g. Chinese/Japanese)
 * 
 * @param {string} char 
 * @returns {boolean}
 */
const isFullWidthChar = (char: string): boolean => {
  if (eaw.characterLength(char) !== 1) {
    return true
  } 
  return false
}

export default isFullWidthChar
