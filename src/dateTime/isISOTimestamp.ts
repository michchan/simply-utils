/**
 * Validate if it is ISO timestamp
 */
const isISOTimestamp = (value: string): boolean => {
  return /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[0-1])T(?:[01]\d|2[0-3])(?::[0-5]\d(?::[0-5]\d(?:\.\d+)?)?)?Z?$/i.test(value)
}

export default isISOTimestamp
