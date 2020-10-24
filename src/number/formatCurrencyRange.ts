import formatCurrency, { Options as Opts } from './formatCurrency'

export interface Options extends Opts {}

const formatCurrencyRange = (
  minNumToFormat: number = 0,
  maxNumToFormat: number = 0,
  locales: string | string[] = [],
  options?: Options,
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