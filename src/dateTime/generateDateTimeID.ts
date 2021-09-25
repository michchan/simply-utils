import zeroPadding from '../number/zeroPadding'
import isStr from '../string/isStr'

const YEAR_DIGITS = 4
const SECOND_DIGITS = 3

/**
 * Generate an ID with format YYYYMMDDHHmmssSSS
 * @category dateTime
 * @module generateDateTimeID
 * @category dateTime
 * @module generateDateTimeID
 */
const generateDateTimeID = (): string => {
  const date = new Date()

  const YYYY = zeroPadding(date.getFullYear(), YEAR_DIGITS)
  const MM = date.getMonth()
  const DD = date.getUTCDate()
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = date.getUTCSeconds()
  const SSS = zeroPadding(date.getUTCMilliseconds(), SECOND_DIGITS)

  return [YYYY, MM, DD, hh, mm, ss, SSS]
    // Add zero padding for all 2-digit segments
    // Do not pad if it is already of type string, which means it is padded.
    .map(n => isStr(n) ? n : zeroPadding(n))
    .join('')
}

export default generateDateTimeID