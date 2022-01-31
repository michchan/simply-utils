/**
 * @category number
 * @module zeroPadding
 */
const zeroPadding = (
  i: number,
  numDigits: number = 2
): string => `${i}`.padStart(numDigits, '0')

export default zeroPadding