import formatCurrency from "./formatCurrency"


const formatCurrencyRange = (
    minNumToFormat: number = 0,
    maxNumToFormat: number = 0,
    locales: string | string[] = [],
    currency: string = 'hkd',
    minimumFractionDigits: number = 2,
    minimumIntegerDigits: number = 1,
): string => {
    // Display price if only one price
    if (minNumToFormat === maxNumToFormat) {
        return formatCurrency(minNumToFormat, locales, currency, minimumFractionDigits, minimumIntegerDigits)
    }
    // Else display price range
    const formattedMin = formatCurrency(minNumToFormat, locales, currency, minimumFractionDigits, minimumIntegerDigits)
    const formattedMax = formatCurrency(maxNumToFormat, locales, currency, minimumFractionDigits, minimumIntegerDigits)
    return `${formattedMin} - ${formattedMax}`
}

export default formatCurrencyRange