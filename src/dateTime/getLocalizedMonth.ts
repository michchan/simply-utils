/**
 *
 * @author Sandy Lau https://github.com/sandylau333
 *
 * @param index
 * @param locale The locale code or an array of locale codes
 * @param format
 * @category dateTime
 * @module getLocalizedMonth
 * @category dateTime
 * @module getLocalizedMonth
 */
const getLocalizedMonth = (
  index: number = 0,
  locale?: string | string[],
  format: 'long' | 'short' = 'long'
): string => {
  const objDate = new Date()
  objDate.setMonth(index)

  return objDate.toLocaleString(locale, { month: format })
}

export default getLocalizedMonth