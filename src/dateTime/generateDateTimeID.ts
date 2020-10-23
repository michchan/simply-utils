import zeroPadding from '../number/zeroPadding'
import isStr from '../string/isStr'

/**
 * Generate an ID with format YYYYMMDDHHmmssSSS
 */
const generateDateTimeID = (): string => {
  const date = new Date()

  const YYYY = zeroPadding(date.getFullYear(), 4)
  const MM = date.getMonth()
  const DD = date.getUTCDate()
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = date.getUTCSeconds()
  const SSS = zeroPadding(date.getUTCMilliseconds(), 3)

  return [YYYY, MM, DD, hh, mm, ss, SSS]
    // Add zero padding for all 2-digit segments
    // Do not pad if it is already of type string, which means it is padded.
    .map(n => isStr(n) ? n : zeroPadding(n))
    .join('')
}

export default generateDateTimeID