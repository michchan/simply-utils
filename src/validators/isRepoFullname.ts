import { URL_SAFE_REGEX_STR } from './isURLSafeStr'

const REGEX = new RegExp(`^${URL_SAFE_REGEX_STR}/${URL_SAFE_REGEX_STR}$`, 'i')

/**
 * Wether it is a globally-unique repository name
 *
 * @param value
 * @category validators
 * @module isRepoFullname
 * @category validators
 * @module isRepoFullname
 */
const isRepoFullname = (value: string): boolean => REGEX.test(value)

export default isRepoFullname