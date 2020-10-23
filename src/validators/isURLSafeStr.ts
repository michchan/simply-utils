const CHAR_NUM_STR = 'a-zA-Z0-9'
export const URL_SAFE_CHAR_REGEX_STR = `[${CHAR_NUM_STR}_-]`
export const URL_SAFE_REGEX_STR = `${URL_SAFE_CHAR_REGEX_STR}+`

// Case 1. length >= 3
const CASE_1 = `[${CHAR_NUM_STR}]${URL_SAFE_REGEX_STR}[${CHAR_NUM_STR}]`
// Case 2. length <= 2
const CASE_2 = `[${CHAR_NUM_STR}]{1,2}`

// The start and the end must be characters of alphabets or numbers
const REGEX = new RegExp(`^(${CASE_1}|${CASE_2})$`, 'i')

/**
 * Whether it is an ID
 *
 * @param value
 */
const isURLSafeStr = (value: string) => REGEX.test(value)

export default isURLSafeStr