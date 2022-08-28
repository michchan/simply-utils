import getCreditCardTypeAndTrimmedValue from './_common/getCreditCardTypeAndTrimmedValue'

const REGEX = /^\d+$/
/**
 *
 * @category validators
 * @module isValidCreditCardNum
 */
const isValidCreditCardNum = (value: string, separator: string = ' '): boolean => {
  const [matchedType, trimmedValue] = getCreditCardTypeAndTrimmedValue(value, separator, 'onlyMatchOne')

  if (!REGEX.test(trimmedValue)) return false

  return !!matchedType && matchedType.lengths.some(length => trimmedValue.length === length)
}

export default isValidCreditCardNum