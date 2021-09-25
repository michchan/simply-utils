/**
 * Get the currency symbol
 *
 * * This function require "Intl.NumberFormat" in global scope.
 * * Please see polyfill/polyfillIntl if you need a polyfill of that.
 * @category number
 * @module getCurrencySymbol
 * @category number
 * @module getCurrencySymbol
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