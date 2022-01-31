import getSpecialCharsRegex from '../validators/getSpecialCharsRegex'
/**
 * @category string
 * @module hasSpecialCharacters
 */
const hasSpecialCharacters = (
  str: string,
  excluded: string[] = [],
): boolean => getSpecialCharsRegex(excluded).test(str)

export default hasSpecialCharacters