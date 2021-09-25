import isSameMonth from './isSameMonth'
import getLastMsOfDate from './getLastMsOfDate'

const MAX_MONTHLY_LAST_DAY = 31

/**
 * @author Sandy Lau https://github.com/sandylau333
 *
 * @param date
 * @category dateTime
 * @module getLastDateOfMonth
 * @category dateTime
 * @module getLastDateOfMonth
 */
function getLastDateOfMonth (date: Date = new Date()): Date {
  // Month of given date
  const month = date.getMonth()
  // Try if set last date is 31st.
  const tryLastDate = new Date(date.getFullYear(), month, MAX_MONTHLY_LAST_DAY)
  // If tryLastDate still in same month of given date
  if (isSameMonth(date, tryLastDate))
    return getLastMsOfDate(tryLastDate)

  // The last date is 31 - date of tryLastDate
  // E.g. tryLastDate is 2nd, then last date of month should be 29th
  const day = MAX_MONTHLY_LAST_DAY - tryLastDate.getDate()
  return getLastMsOfDate(new Date(date.getFullYear(), month, day))
}

export default getLastDateOfMonth