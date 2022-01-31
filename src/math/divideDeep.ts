/**
 * Divide a number with a divisor until the number is smaller than the divisor
 *
 * @author Sandy Lau https://github.com/sandylau333
 *
 * @param dividend The dividend
 * @param divisor The divisor
 * @returns A tuple type of [quotient, depth]. Eg. for num = 40000, and divisor = 1000 -> [40, 1]
 * @category math
 * @module divideDeep
 */
const divideDeep = (
  dividend: number,
  divisor: number,
  maxDepth: number = Infinity
): [number, number] => {
  const exponent = Math.log(dividend) / Math.log(divisor)
  // Math.max(maxDepth, 0) is to ensure maxDepth not smaller than 0
  const depth = Math.max(0, Math.min(Math.floor(exponent), maxDepth))
  const quotient = divisor ** (exponent - depth)

  return [quotient, depth]
}

export default divideDeep