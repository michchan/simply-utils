import { URL_SAFE_REGEX_STR } from './isURLSafeStr'

const REGEX = new RegExp(`^(${URL_SAFE_REGEX_STR}/)?${URL_SAFE_REGEX_STR}$`, 'i')

/**
 * Whether it is a branch name of a repository
 *
 * @param value
 * @category validators
 * @module isRepoBranchName
 * @category validators
 * @module isRepoBranchName
 */
const isRepoBranchName = (value: string): boolean => REGEX.test(value)

export default isRepoBranchName