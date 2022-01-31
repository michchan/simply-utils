const REGEX = /^\+[0-9]{3,}/
/**
 * @category validators
 * @module isPhone
 */
const isPhone = (str: string | number): boolean => REGEX.test(`${str}`)

export default isPhone