const LENGTH = 3
/**
 * Limit the length of credit card security code
 *
 * @param value
 * @category number
 * @module formatCvc
 */
const formatCvc = (value: string): string => {
  if (value.length > LENGTH)
    return value.substr(0, LENGTH)

  return value
}

export default formatCvc