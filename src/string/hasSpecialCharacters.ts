import getSpecialCharsRegex from "../validators/getSpecialCharsRegex";


const hasSpecialCharacters = (
  str: string,
  excluded: string[] = [],
): boolean => getSpecialCharsRegex(excluded).test(str)

export default hasSpecialCharacters
