const REGEX = /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}$/i

/**
 * Validate if it is date-time local
 */
const isDateTimeLocal = (value: string): boolean => REGEX.test(value)

export default isDateTimeLocal