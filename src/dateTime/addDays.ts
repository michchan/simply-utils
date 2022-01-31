const ONE_DAY_MS = 86400000
/**
 * Add n * 24 hours to given date.
 * @param date
 * @param days number of days to add. Can be negative. Default 1
 * @category dateTime
 * @module addDays
 */
function addDays (date: Date, days: number = 1): Date {
  return new Date(date.valueOf() + (days * ONE_DAY_MS))
}

export default addDays