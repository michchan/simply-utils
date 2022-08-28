import creditCardType from 'credit-card-type'
import { CreditCardType } from 'credit-card-type/dist/types'

type GetCreditCardTypeStrategy = 'onlyMatchOne' | 'matchFirst'

const getCreditCardTypeAndTrimmedValue = (
  value: string,
  separator: string = ' ',
  strategy: GetCreditCardTypeStrategy = 'onlyMatchOne'
): [creditCardType: CreditCardType | null, trimmedValue: string] => {
  const regexp = new RegExp(separator, 'g')
  const trimmedValue = value.replace(regexp, '').trim()
  const types = creditCardType(trimmedValue)

  if (
    (strategy === 'onlyMatchOne' && types.length === 1)
    || (strategy === 'matchFirst' && types.length > 0)
  )
    return [types[0], trimmedValue]

  return [null, trimmedValue]
}
export default getCreditCardTypeAndTrimmedValue