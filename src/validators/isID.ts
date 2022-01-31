import isURLSafeStr from './isURLSafeStr'
/**
 * Whether it is an ID
 *
 * @param value
 * @category validators
 * @module isID
 */
const isID = (value: string | number): boolean => isURLSafeStr(`${value}`)

export default isID