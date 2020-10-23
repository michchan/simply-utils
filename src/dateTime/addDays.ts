/**
 * Add n * 24 hours to given date.
 * @param date
 * @param days number of days to add. Can be negative. Default 1
 */
function addDays (date: Date, days: number = 1): Date {
  return new Date(date.valueOf() + (days * 24 * 60 * 60 * 1000))
}

export default addDays