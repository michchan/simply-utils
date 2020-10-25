/**
 * Validate 'key' (e.g. status, type etc.) with case-insensitive RegExp test
 *
 * @param key The key to validate (to be constructed in RegExp)
 * @param value The value to test
 * @param isStrict If enabled, the regex will wrap the key with '^' and '$' symbol. Default to true.
 */
function validateCaseInsensitiveKey (
  key: string,
  value: string,
  isStrict: boolean = true
): boolean {
  const regexStr = isStrict ? `^${key}$` : `${key}`
  return new RegExp(regexStr, 'i').test(value)
}

export default validateCaseInsensitiveKey