export interface Options {
  /** Default to 'hkd' */
  currency?: string;
  /** Default to 2 */
  minimumFractionDigits?: number;
  /** Default to 1 */
  minimumIntegerDigits?: number;
}

/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
 */
const formatCurrency = (
  numToFormat: number = 0,
  locales: string | string[] = [],
  {
    currency = 'hkd',
    minimumFractionDigits = 2,
    minimumIntegerDigits = 1,
  }: Options = {},
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