const REGEX = /^\d{3}$/
/**
 * @DEPRECATED use validators/isValidCreditCardSecurityCode
 *
 * @category validators
 * @module isCvc
 */
const isCvc = (str: string): boolean => REGEX.test(str)

export default isCvc