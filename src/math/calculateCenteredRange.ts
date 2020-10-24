/**
 * Calculate a range of number to be displayed,
 * with the active number to be centered in the range if possible.
 *
 * @author Sandy Lau https://github.com/sandylau333
 *
 * @param {number} active The active number to be centered
 * @param {number} minPossibleIndex Minimum possible number
 * @param {number} maxPossibleIndex Maximum possible number
 * @param {number} maxRange Maximum range of number to be displayed each time
 *
 * @returns {Array<number>} Return a tuple
 * including minimum and maximum number of the range [Min, Max]
 */
const calculateCenteredRange = (
  active: number,
  minPossibleIndex: number,
  maxPossibleIndex: number,
  maxRange: number = 10,
): [number, number] => {
  const numBeforeMiddle = Math.floor((maxRange - 1) / 2)
  let start = Math.max(minPossibleIndex, (active - numBeforeMiddle))
  const end = Math.min(maxPossibleIndex, (start + maxRange - 1))
  start = (end - start + 1) < maxRange
    ? Math.max(minPossibleIndex, (end - maxRange + 1))
    : start
  return [start, end]
}

export default calculateCenteredRange