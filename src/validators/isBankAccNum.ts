// check if have enough length. Input param str should not include any '-'
const REGEX = /^\d{9,12}$/

const isBankAccNum = (str: string): str is BankAccountNumber => REGEX.test(str)

export default isBankAccNum
