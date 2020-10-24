import shortenNumberWithUnit from './shortenNumberWithUnit'

const UNIT_INTERVAL = 1000
const NUMBER_SHORT_UNIT_MAP = [
  // No unit
  '',
  // Kilo
  'K',
  // Million
  'M',
  // Billion
  'B',
  // Trillion
  'T',
]

/**
 * Shorten normal number in appropriate format (e.g. 1K, 10M)
 *
 * @param size The size in bytes
 * @returns A tuple type of [<Displayed number>, <Displayed units>] format. E.g. [1, 'K']
 */
function formatLargeNumber (num: number): [number, string] {
  return shortenNumberWithUnit(num, UNIT_INTERVAL, NUMBER_SHORT_UNIT_MAP)
}
export default formatLargeNumber