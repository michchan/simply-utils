import formatAsGroupedString from './formatAsGroupedString'
const GROUP_SIZE = 4
const NUM_GROUPS = 4
/**
 * @DEPRECATED Use number/formatCreditCardNum
 *
 * Format credit card number (e.g. 4242424242424242)
 * to format like 4242-4242-4242-4242 (separator can be customized)
 *
 * @param value The original credit card number value like 4242424242424242
 * @param separator Customized separator. Default to hyphen '-'.
 * @category number
 * @module formatCardNum
 */
const formatCardNum = (value: string, separator: string = ' '): string => formatAsGroupedString({
  value,
  groupSize: GROUP_SIZE,
  maxNumGroup: NUM_GROUPS,
  separator,
})

export default formatCardNum