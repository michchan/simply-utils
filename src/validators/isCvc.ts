const REGEX = /^\d{3}$/
/**
 * @category validators
 * @module isCvc
 */
const isCvc = (str: string): boolean => REGEX.test(str)

export default isCvc