/**
 *
 * If this is used in Array.sort(), dates will be sorted from latest to earliest
 *
 * @param {string} a ISO-timestamp
 * @param {string} b ISO-timestamp
 *
 * @returns {number}
 *   return -1 if a is before b
 *   return 1 if a is after b
 *   else return 0
 */
const compareISOTimestamp = (a: string, b: string): number => {
  const aDate = new Date(a)
  const bDate = new Date(b)
  const isABeforeB = bDate > aDate
  const isAAfterB = aDate > bDate

  return isABeforeB ? -1 : isAAfterB ? 1 : 0
}

export default compareISOTimestamp