import isNull from '../validators/isNull'
import isUndef from '../validators/isUndef'
import isArr from '../array/isArr'

/**
 * @category object
 * @module isObj
 */
function isObj <T extends { [key: string]: any } = { [key: string]: any }> (
  o: unknown
): o is T {
  return !(isNull(o) || isUndef(o)) && typeof o === 'object' && !isArr(o)
}

export default isObj