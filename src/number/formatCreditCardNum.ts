/* eslint-disable no-console */
import creditCardType, { getTypeInfo } from 'credit-card-type'

/**
 * Reference: https://github.com/braintree/credit-card-type#pretty-card-numbers
 * @ignore
 */
function prettyCardNumber (
  cardNumber: string,
  cardType: string,
  separator: string = ' '
) {
  const card = getTypeInfo(cardType)

  if (card) {
    // @ts-expect-error: @TODO: fix type
    const offsets = [].concat(0, card.gaps, cardNumber.length)
    const components = []

    for (let i = 0; offsets[i] < cardNumber.length; i++) {
      const start = offsets[i]
      const end = Math.min(offsets[i + 1], cardNumber.length)
      components.push(cardNumber.substring(start, end))
    }

    return components.join(separator)
  }

  return cardNumber
}

/**
 * Format credit card number (e.g. 4242424242424242)
 * to format like 4242-4242-4242-4242 (separator can be customized)
 *
 * @param value The original credit card number valu like 4242424242424242
 * @param separator Customized separator. Default to hyphen '-'.
 * @category number
 * @module formatCreditCardNum
 */
const formatCreditCardNum = (value: string, separator: string = ' '): string => {
  const regexp = new RegExp(separator, 'g')
  const trimmedValue = value.replace(regexp, '').trim()
  const types = creditCardType(trimmedValue)
  if (types.length === 1) {
    const [matchedType] = types
    const maxLength = [...matchedType.lengths].sort().pop()
    const limitedValue = trimmedValue.substring(0, maxLength)
    return prettyCardNumber(limitedValue, matchedType.type, separator)
  }
  return value
}
export default formatCreditCardNum