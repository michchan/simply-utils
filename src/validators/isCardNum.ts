// Without spacing e.g. 42424242424242424
const REGEX = /^\d{4}\d{4}\d{4}\d{4}$/
/**
 * @category validators
 * @module isCardNum
 */
const isCardNum = (str: string): boolean => REGEX.test(str)

export default isCardNum