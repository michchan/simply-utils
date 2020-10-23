import isSameMonth from './isSameMonth'
import getLastMsOfDate from './getLastMsOfDate'

/**
 * @author Sandy Lau https://github.com/sandylau333
 *
 * @param date
 */
function getLastDateOfMonth (date: Date = new Date()): Date {
  // Month of given date
  const month = date.getMonth()
  // Try if set last date is 31st.
  const tryLastDate = new Date(date.getFullYear(), month, 31)
  // If tryLastDate still in same month of given date
  if (isSameMonth(date, tryLastDate))
    return getLastMsOfDate(tryLastDate)

  // The last date is 31 - date of tryLastDate
  // E.g. tryLastDate is 2nd, then last date of month should be 29th
  return getLastMsOfDate(new Date(date.getFullYear(), month, 31 - tryLastDate.getDate()))
}

export default getLastDateOfMonth