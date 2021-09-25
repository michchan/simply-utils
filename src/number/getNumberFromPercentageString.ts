/**
 * Get the number from a percentage string like '89.64%'
 * @category number
 * @module getNumberFromPercentageString
 * @category number
 * @module getNumberFromPercentageString
 */
function getNumberFromPercentageString (value: string | number): number {
  return Number(`${value}`.replace(/%$/, ''))
}

export default getNumberFromPercentageString