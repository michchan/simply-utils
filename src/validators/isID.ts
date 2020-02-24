
export const ID_REGEX_STR = '[a-zA-Z0-9_-]+'

const REGEX = new RegExp(`^${ID_REGEX_STR}$`, 'i')

/**
 * Whether it is an ID
 * 
 * @param value 
 */
const isID = (value: string) => REGEX.test(value)

export default isID