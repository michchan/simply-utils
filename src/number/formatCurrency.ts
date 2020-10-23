/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
 *
 * @param {number} numToFormat
 * @param {string | Array<string>} locales
 * @param {string} currency
 * @param {number} minimumIntegerDigits
 * @param {number} minimumFractionDigits
 */
const formatCurrency = (
  numToFormat: number = 0,
  locales: string | string[] = [],
  currency: string = 'hkd',
  minimumFractionDigits: number = 2,
  minimumIntegerDigits: number = 1,
): string => {
  const formatter = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits,
    minimumIntegerDigits,
  })

  return formatter.format(numToFormat)
}

export default formatCurrency