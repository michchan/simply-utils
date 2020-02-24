import formatAsGroupedString from "./formatAsGroupedString";


const formatCardExp = (value: CreditCardExpDate, separator: string = ' / '): string => {
    // Replace extra slashes "/" of value first before formatting
    const normalizedValue = value
        .split(separator)
        .map(segment => segment.replace(/\//g, ''))
        .join(separator)

    return formatAsGroupedString(normalizedValue, 2, 2, separator)
}

export default formatCardExp