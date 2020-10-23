import zeroPadding from '../number/zeroPadding'

/**
 *
 * @param date
 * @returns A date string of format "YYYY-MM"
 */
const toYYYYMM = (date: Date): string => `${date.getFullYear()}-${zeroPadding(Number(date.getMonth()) + 1)}`

export default toYYYYMM