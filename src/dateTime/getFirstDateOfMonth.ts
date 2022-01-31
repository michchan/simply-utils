/**
 *
 * @author Sandy Lau https://github.com/sandylau333
 * @param date
 * @category dateTime
 * @module getFirstDateOfMonth
 */
function getFirstDateOfMonth (date: Date = new Date()): Date {
  return new Date(date.getFullYear(), date.getMonth())
}

export default getFirstDateOfMonth