
export const URL_SAFE_REGEX_STR = '[a-zA-Z0-9_-]+'

const REGEX = new RegExp(`^${URL_SAFE_REGEX_STR}$`, 'i')

/**
 * Whether it is an ID
 * 
 * @param value 
 */
const isURLSafeStr = (value: string) => REGEX.test(value)

export default isURLSafeStr