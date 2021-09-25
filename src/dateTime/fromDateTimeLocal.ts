import { isSafari } from 'react-device-detect'

import isDateString from './isDateString'
import isTimeLocal from './isTimeLocal'

/**
 *
 *
 * @param value string value of date-time,
 *        can be format of datetime-local, date-local, time-local or ISO-timestamp
 * @returns ISO-timestamp
 * @category dateTime
 * @module fromDateTimeLocal
 * @category dateTime
 * @module fromDateTimeLocal
 */
const fromDateTimeLocal = (value: string): string => {
  if (isTimeLocal(value)) {
    return (() => {
      const [hours = 0, mins = 0, secs = 0, ms = 0] = value.split(/\:|\./)
      const date = new Date()
      date.setHours(Number(hours), Number(mins), Number(secs), Number(ms))
      return date.toISOString()
    })()
  }

  // Fix safari cannot parse ISO string properly issue
  // Reference: https://stackoverflow.com/questions/6427204/date-parsing-in-javascript-is-different-between-safari-and-chrome/6428201#6428201
  const thisValue = isSafari
    ? value.replace(/-/g, '/').replace('T', ' ')
      .replace(/(\..*|\+.*)/, '')
    : value

  // Parse the date string
  if (!isDateString(thisValue))
    return ''
  return new Date(thisValue).toISOString()
}

export default fromDateTimeLocal