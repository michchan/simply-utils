// Check if have enough length. Input param str should not include any '-'
const REGEX = /^\d{7,12}$/
/**
 * @category validators
 * @module isBankAccNum
 */
const isBankAccNum = (str: string): boolean => REGEX.test(str)

export default isBankAccNum