/**
 * Validate if it is date local
 */
const isDateLocal = (value: string): boolean => {
  return /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/i.test(value)
}

export default isDateLocal
