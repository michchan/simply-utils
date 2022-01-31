import formatCurrency, { FormatCurrencyOptions } from './formatCurrency'

export interface FormatCurrencyRangOptions extends FormatCurrencyOptions {}
/**
 * @category number
 * @module formatCurrencyRange
 */
const formatCurrencyRange = (
  minNumToFormat: number = 0,
  maxNumToFormat: number = 0,
  locales: string | string[] = [],
  options?: FormatCurrencyRangOptions,
): string => {
  // Display price if only one price
  if (minNumToFormat === maxNumToFormat)
    return formatCurrency(minNumToFormat, locales, options)

  // Else display price range
  const formattedMin = formatCurrency(minNumToFormat, locales, options)
  const formattedMax = formatCurrency(maxNumToFormat, locales, options)
  return `${formattedMin} - ${formattedMax}`
}

export default formatCurrencyRange