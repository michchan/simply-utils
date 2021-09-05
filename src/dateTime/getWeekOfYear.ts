const MS_IN_DAY = 86400000
const MAX_WEEKDAY = 7
const DAY_OFFSET = 4

/**
 * Based on information at:
 * http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
 *
 * Algorithm is to find nearest thursday, it's year
 * is the year of the week number. Then get weeks
 * between that date and the first day of that year.
 *
 * Note that dates in one year can be weeks of previous
 * or next year, overlap is up to 3 days.
 *
 * e.g. 2014/12/29 is Monday in week 1 of 2015
 *   2012/1/1  is Sunday in week 52 of 2011
 *
 * @author https://stackoverflow.com/a/6117889/9428719
 * @param d
 * @category dateTime
 * @module getWeekOfYear
 */
function getWeekOfYear (date: Date): number {
  let d = date
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + DAY_OFFSET - (d.getUTCDay() || MAX_WEEKDAY))
  // Get first day of year
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  // Calculate full weeks to nearest Thursday
  const weekNum = Math.ceil((((Number(d) - Number(yearStart)) / MS_IN_DAY) + 1) / MAX_WEEKDAY)
  // Return array of year and week number
  return weekNum
}

export default getWeekOfYear