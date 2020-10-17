import shortenNumberWithUnit from "./shortenNumberWithUnit"


const NUMBER_SHORT_UNIT_MAP = [
  '', // No unit
  'K', // Kilo
  'M', // Million
  'B', // Billion
  'T', // Trillion
]

/**
 * Shorten normal number in appropriate format (e.g. 1K, 10M)
 * 
 * @param size The size in bytes
 * @returns A tuple type of [<Displayed number>, <Displayed units>] format. E.g. [1, 'K']
 */
const formatLargeNumber = (num: number): [number, string] => {
  return shortenNumberWithUnit(num, 1000, NUMBER_SHORT_UNIT_MAP)
} 

export default formatLargeNumber
