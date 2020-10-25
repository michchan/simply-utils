import isURLSafeStr from './isURLSafeStr'

/**
 * Whether it is an ID
 *
 * @param value
 */
const isID = (value: string | number): boolean => isURLSafeStr(`${value}`)

export default isID