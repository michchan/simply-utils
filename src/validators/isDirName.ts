import { URL_SAFE_REGEX_STR } from './isURLSafeStr'

const REGEX = new RegExp(`^(/|((/?${URL_SAFE_REGEX_STR})(/${URL_SAFE_REGEX_STR})*))$`, 'i')

/**
 * Whether it is a directory name
 *
 * @param value
 * @category validators
 * @module isDirName
 * @category validators
 * @module isDirName
 */
const isDirName = (value: string): boolean => REGEX.test(value)

export default isDirName