const REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[0-1])T(?:[01]\d|2[0-3])(?::[0-5]\d(?::[0-5]\d(?:\.\d+)?)?)?Z?$/i

/**
 * Validate if it is ISO timestamp
 * @category dateTime
 * @module isISOTimestamp
 */
const isISOTimestamp = (value: string): boolean => REGEX.test(value)

export default isISOTimestamp