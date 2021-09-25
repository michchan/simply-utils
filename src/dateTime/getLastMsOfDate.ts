const LAST_HOUR = 23
const LAST_MIN = 59
const LAST_SECOND = 59
const LAST_MS = 999

/**
 *
 * @author Sandy Lau https://github.com/sandylau333
 * @param date
 * @category dateTime
 * @module getLastMsOfDate
 * @category dateTime
 * @module getLastMsOfDate
 */
function getLastMsOfDate (date: Date = new Date()): Date {
  const clonedDate = new Date(date)
  clonedDate.setHours(LAST_HOUR, LAST_MIN, LAST_SECOND, LAST_MS)
  return clonedDate
}

export default getLastMsOfDate