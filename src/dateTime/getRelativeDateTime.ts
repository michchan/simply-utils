import isDateString from './isDateString'
import isStr from '../string/isStr'

/**
 * Get relative date time string e.g. 3 days ago, 3 weeks ago
 *
 * @param comparedDateTime ISO-timestamp or Date instance
 * @param relatedDateTime ISO-timestamp or Date instance
 * @param locales The locale code or an array of locale codes
 */
function getRelativeDateTime (
  comparedDateTime: string | Date,
  relatedDateTime: string | Date,
  locales: string | string[],
): string {
  const comparedDate
    = isStr(comparedDateTime)
      ? new Date(isDateString(comparedDateTime) ? comparedDateTime : 0)
      : comparedDateTime || new Date()

  const relativeDate
    = isStr(relatedDateTime)
      ? new Date(isDateString(relatedDateTime) ? relatedDateTime : 0)
      : relatedDateTime || new Date()

  // @ts-ignore: Ensured a polyfill for Intl.RelativeTimeFormat has been made
  const rtf = new Intl.RelativeTimeFormat(locales, { numeric: 'auto' })

  const diffInSecond = ((comparedDate.getTime() - relativeDate.getTime()) / 1000)
  const diffInMins = diffInSecond / 60

  if (Math.abs(Math.round(diffInSecond)) === 0) {
    return rtf.format(0, 'second')
  } else if (Math.abs(diffInSecond) < 60) {
    // Minimum precision to every ten second
    return rtf.format(Math.round(diffInSecond / 10) * 10, 'second')
  } else if (Math.abs(diffInMins) < 60) {
    return rtf.format(Math.round(diffInMins), 'minute')
  }
  const diffInHour = diffInMins / 60

  if (Math.abs(diffInHour) < 24)
    return rtf.format(Math.round(diffInHour), 'hour')

  const diffInDay = diffInHour / 24

  if (Math.round(diffInDay) % 365 === 0) {
    const diffInYear = diffInDay / 365
    return rtf.format(Math.round(diffInYear), 'year')
  } else
  if (Math.round(diffInDay) % 30 === 0) {
    const diffInMonth = diffInDay / 30
    return rtf.format(Math.round(diffInMonth), 'month')
  } else
  if (Math.round(diffInDay) % 7 === 0) {
    const diffInWeek = diffInDay / 7
    return rtf.format(Math.round(diffInWeek), 'week')
  }
  return rtf.format(Math.round(diffInDay), 'day')
}

export default getRelativeDateTime