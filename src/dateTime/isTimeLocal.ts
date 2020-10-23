/**
 * Validate if it is time local
 */
const isTimeLocal = (value: string): boolean => /^[0-9]{2}:[0-9]{2}(:[0-9]{2}(\.[0-9]{3})?)?$/i.test(value)

export default isTimeLocal