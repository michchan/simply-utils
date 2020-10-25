import isNull from './isNull'
import isUndef from './isUndef'

type Func = (...args: any[]) => any

// Not using "isFunction" here to avoid wrong import from other utils library
function isFunc <T extends Func = Func> (o: unknown): o is T {
  return !(isNull(o) || isUndef(o)) && typeof o === 'function'
}

export default isFunc