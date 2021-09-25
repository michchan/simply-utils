import getLocalizedWeekday from './getLocalizedWeekday'

const NUM_WEEKDAYS = 7
/**
 *
 * @author Sandy Lau https://github.com/sandylau333
 *
 * @param locale The locale code or an array of locale codes
 * @param format
 * @category dateTime
 * @module getLocalizedWeekdays
 * @category dateTime
 * @module getLocalizedWeekdays
 */
const getLocalizedWeekdays = (
  locale?: string | string[],
  format: 'long' | 'short' = 'long'
): string[] => new Array(NUM_WEEKDAYS).fill('')
  .map((d, weekdayIndex) => (
    getLocalizedWeekday(weekdayIndex, locale, format)
  ))

export default getLocalizedWeekdays