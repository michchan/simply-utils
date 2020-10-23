import isDateString from './isDateString'
import zeroPadding from '../number/zeroPadding'

export interface ToDateTimeLocalOptions {
  dateOnly?: boolean;
  timeOnly?: boolean;
}

/**
 * As the HTML5 input simply doesn't parse the ISO8061 timestamp with local timezone
 * So we have to parse it manually
 * @param {String} isoDatetime Example value: "2019-05-02T05:28:18.185Z"
 * @returns {String}
 * A string of type datetime-local, date-local or time-local (depending on options passed).
 * Example value: "2019-05-02T13:28"
 */
const toDateTimeLocal = (
  isoDatetime: string,
  options: ToDateTimeLocalOptions = {}
): string => {
  if (!isDateString(isoDatetime)) return ''

  const d = new Date(isoDatetime)
  const YYYY = d.getFullYear()
  const MM = zeroPadding(d.getMonth() + 1) // Month start from ZERO
  const DD = zeroPadding(d.getDate())
  const HH = zeroPadding(d.getHours())
  const mm = zeroPadding(d.getMinutes())

  const date = `${YYYY}-${MM}-${DD}`
  const time = `${HH}:${mm}`

  if ((options || {}).dateOnly) return date
  if ((options || {}).timeOnly) return time

  return `${date}T${time}`
}

export default toDateTimeLocal