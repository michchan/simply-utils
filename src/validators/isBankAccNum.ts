// Check if have enough length. Input param str should not include any '-'
const REGEX = /^\d{7,12}$/

const isBankAccNum = (str: string): boolean => REGEX.test(str)

export default isBankAccNum