import formatAsGroupedString from './formatAsGroupedString'

/**
 * Format the expiry date '1223' to format like '12/23'
 *
 * @param value The expiry date value of a credit card like '1223'
 * @param separator
 * @category number
 * @module formatCardExp
 */
const formatCardExp = (value: string, separator: string = ' / '): string => {
  // Replace extra slashes "/" of value first before formatting
  const normalizedValue = value
    .split(separator)
    .map(segment => segment.replace(/\//g, ''))
    .join(separator)

  return formatAsGroupedString({
    value: normalizedValue,
    groupSize: 2,
    maxNumGroup: 2,
    separator,
  })
}

export default formatCardExp