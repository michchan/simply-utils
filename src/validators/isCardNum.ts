
// Without spacing e.g. 42424242424242424
const REGEX = /^\d{4}\d{4}\d{4}\d{4}$/

const isCardNum = (str): str is CreditCardNumber => REGEX.test(str)

export default isCardNum