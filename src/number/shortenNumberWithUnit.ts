import divideDeep from "../math/divideDeep"


/**
 * Get a shorten number with unit (e.g. 1K, 1M)
 * 
 * @param num The number to parse. E.g. 300000
 * @param divisor The divisor for each depth. E.g. 1000
 * @param unitsMap The mapping of depth to unit. E.g. ['K', 'M', 'B']
 * 
 * @returns A tuple type of [<Displayed number>, <Displayed units>] format. E.g. [300, 'K']
 */
const shortenNumberWithUnit = (num: number, divisor: number, unitsMap: string[]): [number, string] => {
    const [normalizedNum, depth] = divideDeep(num, divisor, unitsMap.length - 1)

    const fixedNum = +normalizedNum.toFixed(2)
    const unit = unitsMap[depth]

    return [fixedNum, unit]
}

export default shortenNumberWithUnit