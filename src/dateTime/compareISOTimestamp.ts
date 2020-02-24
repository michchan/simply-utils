/**
 *
 * If this is used in Array.sort(), dates will be sorted from latest to earliest
 * 
 * @param {string} a ISO-timestamp
 * @param {string} b ISO-timestamp
 * 
 * @returns {number}
 *      return -1 if a is before b
 *      return 1 if a is after b
 *      else return 0
 */
const compareISOTimestamp = (a: string, b: string): number => {
    const aDate = new Date(a)
    const bDate = new Date(b)
    const aIsBeforeB = bDate > aDate
    const aIsAfterB = aDate > bDate

    return aIsBeforeB? -1 : aIsAfterB? 1 : 0
}

export default compareISOTimestamp