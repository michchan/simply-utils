import isNum from '../number/isNum'

/**
 *
 * @param value
 * @param unit Default to `px`
 * @category style
 * @module parseCSSNumWithUnit
 */
function parseCSSNumWithUnit <
  T extends number | string,
  R extends string
> (
  value: T,
  unit: string = 'px'
): R {
  return (isNum(value, true) ? `${value}${unit}` : value) as R
}

export default parseCSSNumWithUnit