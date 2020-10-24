const REGEX = /^[0-9]{2}:[0-9]{2}(:[0-9]{2}(\.[0-9]{3})?)?$/i

/**
 * Validate if it is time local
 */
const isTimeLocal = (value: string): boolean => REGEX.test(value)

export default isTimeLocal