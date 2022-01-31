/**
 * Get the number the callback of Array.sort()
 * @category array
 * @module getArraySortNumber
 */
function getArraySortNumber <T> (a: T, b: T): number {
  if (a === b) return 0
  return a > b ? 1 : -1
}

export default getArraySortNumber