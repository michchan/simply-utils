import isNum from '../number/isNum'
import isStr from '../string/isStr'
/**
 * @category validators
 * @module isNumOrStr
 */
function isNumOrStr <T extends number | string = number | string> (o: unknown): o is T {
  return isNum(o) || isStr(o)
}

export default isNumOrStr