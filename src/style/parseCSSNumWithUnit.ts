import isNum from "../number/isNum"



/**
 * 
 * @param value 
 * @param unit Default to `px`
 */
function parseCSSNumWithUnit <
  T extends number | string, 
  R extends string
> (
  value: T,
  unit: string = 'px'
): R {
  return (isNum(value, true) ? `${value}px` : value) as R
}

export default parseCSSNumWithUnit
