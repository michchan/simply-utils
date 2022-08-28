const LENGTH = 3
/**
 * @DEPRECATED Use number/formatCreditCardSecurityCode
 *
 * Limit the length of credit card security code
 *
 * @param value
 * @category number
 * @module formatCvc
 */
const formatCvc = (value: string): string => {
  if (value.length > LENGTH)
    return value.substring(0, LENGTH)

  return value
}

export default formatCvc