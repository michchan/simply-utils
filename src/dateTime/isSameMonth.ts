/**
 * Check if on same month (ignore day and time)
 *
 * @author Sandy Lau https://github.com/sandylau333
 *
 * @param a
 * @param b
 * @category dateTime
 * @module isSameMonth
 * @category dateTime
 * @module isSameMonth
 */
const isSameMonth = (a: Date, b: Date): boolean => {
  const aMonth = new Date(a.getFullYear(), a.getMonth())
  const bMonth = new Date(b.getFullYear(), b.getMonth())
  return aMonth.valueOf() === bMonth.valueOf()
}

export default isSameMonth