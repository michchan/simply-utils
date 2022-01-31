const REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i
/**
 * @category validators
 * @module isEmail
 */
const isEmail = (str: string): boolean => REGEX.test(str)

export default isEmail