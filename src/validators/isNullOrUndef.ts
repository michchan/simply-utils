import isNull from "./isNull"
import isUndef from "./isUndef"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isNullOrUndef = (o: any): o is null | undefined | void => isNull(o) || isUndef(o)

export default isNullOrUndef
