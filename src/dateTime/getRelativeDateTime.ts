import isDateString from './isDateString'
import isStr from '../string/isStr'

const ONE_SECOND_MS = 1000
const MAX_SECONDS = 60
const MAX_MINS = 60
const MAX_HOURS = 24
const MAX_DAYS_IN_WEEK = 7
const MAX_DAYS_IN_MONTH = 30
const MAX_DAYS_IN_YEAR = 365
const SECOND_PRECISION = 10

/**
 * Get relative date time string e.g. 3 days ago, 3 weeks ago
 *
 * * This function require "Intl.RelativeTimeFormat" in global scope.
 * * Please see polyfill/polyfillIntl if you need a polyfill of that.
 *
 * @param comparedDateTime ISO-timestamp or Date instance
 * @param relatedDateTime ISO-timestamp or Date instance
 * @param locales The locale code or an array of locale codes
 * @category dateTime
 * @module getRelativeDateTime
 * @category dateTime
 * @module getRelativeDateTime
 */
function getRelativeDateTime (
  comparedDateTime: string | Date,
  relatedDateTime: string | Date,
  locales: string | string[],
): string {
  const comparedDate = isStr(comparedDateTime)
    ? new Date(isDateString(comparedDateTime) ? comparedDateTime : 0)
    : comparedDateTime || new Date()
  const relativeDate = isStr(relatedDateTime)
    ? new Date(isDateString(relatedDateTime) ? relatedDateTime : 0)
    : relatedDateTime || new Date()

  // @ts-expect-error: Polyfill is required
  const rtf = new Intl.RelativeTimeFormat(locales, { numeric: 'auto' })
  const diffInSecond = ((comparedDate.getTime() - relativeDate.getTime()) / ONE_SECOND_MS)
  const diffInMins = diffInSecond / MAX_SECONDS

  if (Math.abs(Math.round(diffInSecond)) === 0) {
    return rtf.format(0, 'second')
  } else if (Math.abs(diffInSecond) < MAX_SECONDS) {
    // Minimum precision to every ten second
    const numSecs = Math.round(diffInSecond / SECOND_PRECISION) * SECOND_PRECISION
    return rtf.format(numSecs, 'second')
  } else if (Math.abs(diffInMins) < MAX_MINS) {
    return rtf.format(Math.round(diffInMins), 'minute')
  }
  const diffInHour = diffInMins / MAX_MINS

  if (Math.abs(diffInHour) < MAX_HOURS)
    return rtf.format(Math.round(diffInHour), 'hour')

  const diffInDay = diffInHour / MAX_HOURS

  if (Math.round(diffInDay) % MAX_DAYS_IN_YEAR === 0) {
    const diffInYear = diffInDay / MAX_DAYS_IN_YEAR
    return rtf.format(Math.round(diffInYear), 'year')
  } else
  if (Math.round(diffInDay) % MAX_DAYS_IN_MONTH === 0) {
    const diffInMonth = diffInDay / MAX_DAYS_IN_MONTH
    return rtf.format(Math.round(diffInMonth), 'month')
  } else
  if (Math.round(diffInDay) % MAX_DAYS_IN_WEEK === 0) {
    const diffInWeek = diffInDay / MAX_DAYS_IN_WEEK
    return rtf.format(Math.round(diffInWeek), 'week')
  }
  return rtf.format(Math.round(diffInDay), 'day')
}

export default getRelativeDateTime