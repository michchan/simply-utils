import shortenNumberWithUnit from './shortenNumberWithUnit'
const EACH_KB = 1024
const UNITS_MAP = [
  'B',
  'KB',
  'MB',
  'GB',
  'TB',
  'PB',
]
/**
 * Display file size in appropriate format (e.g. B, KB, MB, GB)
 *
 * @param size The size in bytes
 * @returns A tuple type of [<Displayed number>, <Displayed units>] format. E.g. [300, 'MB']
 * @category number
 * @module formatByteSize
 */
function formatByteSize (size: number): [number, string] {
  return shortenNumberWithUnit(size, EACH_KB, UNITS_MAP)
}

export default formatByteSize