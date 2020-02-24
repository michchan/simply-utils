import isNum from "../number/isNum"
import isStr from "../string/isStr"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isNumOrStr <T extends number | string = number | string> (o: any): o is T {
    return isNum(o) || isStr(o)
}

export default isNumOrStr