import formatAsGroupedString from './formatAsGroupedString'

/**
 * Format credit card number (e.g. 4242424242424242) to format like 4242-4242-4242-4242 (separator can be customized)
 *
 * @param value The original credit card number value like 4242424242424242
 * @param separator Customized separator. Default to hyphen '-'.
 */
const formatCardNum = (value: string, separator: string = ' '): string => formatAsGroupedString(value, 4, 4, separator)

export default formatCardNum