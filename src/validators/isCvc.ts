
const REGEX = /^\d{3}$/

const isCvc = (str): str is CreditCardCVC => REGEX.test(str)

export default isCvc