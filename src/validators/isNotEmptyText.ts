const REGEX = /^.+$/i
/**
 * @category validators
 * @module isNotEmptyText
 */
const isNotEmptyText = (str: string): boolean => REGEX.test(str)

export default isNotEmptyText