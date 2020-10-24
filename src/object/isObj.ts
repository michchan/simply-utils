import isNull from '../validators/isNull'
import isUndef from '../validators/isUndef'
import isArr from '../array/isArr'

// Not using "isObject" here to avoid wrong import from other utils library
function isObj <T extends { [key: string]: any } = { [key: string]: any }> (
  o: unknown
): o is T {
  return !(isNull(o) || isUndef(o)) && typeof o === 'object' && !isArr(o)
}

export default isObj