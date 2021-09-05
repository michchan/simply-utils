/**
 *
 * @author Sandy Lau https://github.com/sandylau333
 * @param date
 * @category dateTime
 * @module getFirstMsOfDate
 */
function getFirstMsOfDate (date: Date = new Date()): Date {
  const clonedDate = new Date(date)
  clonedDate.setHours(0, 0, 0, 0)
  return clonedDate
}

export default getFirstMsOfDate