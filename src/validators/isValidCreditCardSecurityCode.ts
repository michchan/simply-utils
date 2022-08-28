import getCreditCardTypeAndTrimmedValue from './_common/getCreditCardTypeAndTrimmedValue'

const REGEX = /^\d{3,4}$/

/**
 * @category validators
 * @module isValidCreditCardSecurityCode
 */
const isValidCreditCardSecurityCode = (
  value: string,
  cardNumber: string,
  separator: string = ' '
): boolean => {
  const [matchedType] = getCreditCardTypeAndTrimmedValue(cardNumber, separator, 'onlyMatchOne')

  if (!REGEX.test(value)) return false

  return !!matchedType && matchedType.code.size === value.length
}
export default isValidCreditCardSecurityCode