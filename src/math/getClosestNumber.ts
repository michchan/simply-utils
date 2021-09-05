/**
 * Get the number of an array of numbers closest to a passed number
 *
 * When there is a condition that,
 * two number have same difference to 'num',
 * the previous one will be returned.
 *
 * Reference: https://stackoverflow.com/questions/8584902/get-closest-number-out-of-array
 *
 * @param num The passed number
 * @param numbers The array of numbers
 * @category math
 * @module getClosestNumber
 */
const getClosestNumber = (num: number, numbers: number[]): number => numbers
  .reduce((prev, curr) => (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev))

export default getClosestNumber