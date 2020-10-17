import isNum from "./isNum";



/**
 * Whether the value is actually a number but can be either of type string or number
 * 
 * @param o 
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isNumStr = (o: any): o is number | string => isNum(o, true)

export default isNumStr
