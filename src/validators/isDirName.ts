import { URL_SAFE_REGEX_STR } from './isURLSafeStr'

const REGEX = new RegExp(`^(/|((/?${URL_SAFE_REGEX_STR})(/${URL_SAFE_REGEX_STR})*))$`, 'i')

/**
 * Whether it is a directory name
 *
 * @param value
 */
const isDirName = (value: string) => REGEX.test(value)

export default isDirName