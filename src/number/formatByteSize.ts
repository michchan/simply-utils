import shortenNumberWithUnit from "./shortenNumberWithUnit"


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
 */
const formatByteSize = (size: number): [number, string] => {
    return shortenNumberWithUnit(size, 1024, UNITS_MAP)
}

export default formatByteSize
