import isNum from './isNum'

/**
 * Whether the value is actually a number but can be either of type string or number
 *
 * @param o
 * @category number
 * @module isNumStr
 * @category number
 * @module isNumStr
 */
const isNumStr = (o: unknown): o is number | string => isNum(o, true)

export default isNumStr