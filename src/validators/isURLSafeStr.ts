


const CHAR_NUM_STR = `a-zA-Z0-9`
export const URL_SAFE_CHAR_REGEX_STR = `[${CHAR_NUM_STR}_-]`
export const URL_SAFE_REGEX_STR = `${URL_SAFE_CHAR_REGEX_STR}+`

// The start and the end must be characters of alphabets or numbers
const REGEX = new RegExp(`^[${CHAR_NUM_STR}]${URL_SAFE_REGEX_STR}[${CHAR_NUM_STR}]$`, 'i')

/**
 * Whether it is an ID
 * 
 * @param value 
 */
const isURLSafeStr = (value: string) => REGEX.test(value)

export default isURLSafeStr