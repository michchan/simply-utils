import isNull from "../validators/isNull"
import isUndef from "../validators/isUndef"
import isArr from '../array/isArr'


// Not using "isObject" here to avoid wrong import from other utils library
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isObj <T extends object = object> (o: any): o is T {
    return !(isNull(o) || isUndef(o)) && typeof o === 'object' && !isArr(o)
}

export default isObj