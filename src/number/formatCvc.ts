
/**
 * Limit the length of credit card security code
 * 
 * @param value 
 */
const formatCvc = (value: string): string => {
  if (value.length > 3) {
    return value.substr(0, 3)
  }
  return value
}

export default formatCvc
