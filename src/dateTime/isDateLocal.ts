/**
 * Validate if it is date local
 * @category dateTime
 * @module isDateLocal
 * @category dateTime
 * @module isDateLocal
 */
const isDateLocal = (value: string): boolean => /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/i.test(value)

export default isDateLocal