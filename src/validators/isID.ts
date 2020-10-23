import isURLSafeStr from './isURLSafeStr'

/**
 * Whether it is an ID
 *
 * @param value
 */
const isID = (value: string) => isURLSafeStr(value)

export default isID