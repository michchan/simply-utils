import creditCardType from 'credit-card-type'

const DEFAULT_LENGTH = 3
/**
 * Limit the length of credit card security code
 *
 * @param value
 * @category number
 * @module formatCreditCardSecurityCode
 */
const formatCreditCardSecurityCode = (
  value: string,
  cardNumber: string,
  separator: string = ' '
): string => {
  const regexp = new RegExp(separator, 'g')
  const trimmedValue = cardNumber.replace(regexp, '').trim()
  const types = creditCardType(trimmedValue)

  if (types.length === 1) {
    const [matchedType] = types
    return value.substring(0, matchedType.code.size)
  }

  if (value.length > DEFAULT_LENGTH)
    return value.substring(0, DEFAULT_LENGTH)

  return value
}

export default formatCreditCardSecurityCode