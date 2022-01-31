import isNull from './isNull'
import isUndef from './isUndef'

type Func = (...args: any[]) => any

/**
 * @category validators
 * @module isFunc
 */
function isFunc <T extends Func = Func> (o: unknown): o is T {
  return !(isNull(o) || isUndef(o)) && typeof o === 'function'
}

export default isFunc