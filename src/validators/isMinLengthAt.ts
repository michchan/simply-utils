/**
 * Wether the length of the value is greater than a minimum length
 *
 * @param minLength
 * @param value
 * @category validators
 * @module isMinLengthAt
 * @category validators
 * @module isMinLengthAt
 */
function isMinLengthAt (
  minLength: number,
  value: string | number,
  isSpaceAllowed: boolean = false
): boolean {
  return new RegExp(`^${isSpaceAllowed ? '.' : '\\S'}{${minLength},}$`, '').test(`${value}`)
}

export default isMinLengthAt