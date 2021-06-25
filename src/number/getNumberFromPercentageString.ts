/**
 * Get the number from a percentage string like '89.64%'
 */
function getNumberFromPercentageString (value: string | number): number {
  return Number(`${value}`.replace(/%$/, ''))
}

export default getNumberFromPercentageString