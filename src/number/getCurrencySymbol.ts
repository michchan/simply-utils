/**
 * Get the currency symbol
 */
const getCurrencySymbol = (
  locales: string | string[] = [],
  currency: string = 'hkd',
): string => {
  const formatter = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency.toUpperCase(),
  })

  const parts = formatter.formatToParts(0)
  const currencyPart = parts.find(part => part.type === 'currency')

  return currencyPart ? currencyPart.value : currency
}

export default getCurrencySymbol