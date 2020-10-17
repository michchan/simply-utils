import isNull from "./isNull"
import isUndef from "./isUndef"


// Not using "isFunction" here to avoid wrong import from other utils library
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isFunc <T extends Function = (...args: any[]) => any> (o: any): o is T {
  return !(isNull(o) || isUndef(o)) && typeof o === 'function'
}

export default isFunc
