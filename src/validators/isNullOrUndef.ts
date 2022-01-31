import isNull from './isNull'
import isUndef from './isUndef'
/**
 * @category validators
 * @module isNullOrUndef
 */
const isNullOrUndef = (o: unknown): o is null | undefined | void => isNull(o) || isUndef(o)
export default isNullOrUndef