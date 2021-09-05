import zeroPadding from '../number/zeroPadding'

/**
 *
 * @param date
 * @returns A date string of format "YYYY-MM"
 * @category dateTime
 * @module toYYYYMM
 */
const toYYYYMM = (date: Date): string => {
  const YYYY = date.getFullYear()
  const MM = zeroPadding(Number(date.getMonth()) + 1)
  return `${YYYY}-${MM}`
}

export default toYYYYMM