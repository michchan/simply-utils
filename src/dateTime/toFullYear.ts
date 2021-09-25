import isStr from '../string/isStr'
import zeroPadding from '../number/zeroPadding'

const CENTURY_DIGITS = 2

/**
 * Convert 2 digit year to 4 digit year
 * @param year
 * @category dateTime
 * @module toFullYear
 * @category dateTime
 * @module toFullYear
 */
const toFullYear = (year: string | number): number | undefined => {
  const yearString = isStr(year) ? year : zeroPadding(year, CENTURY_DIGITS)

  const currentYear = new Date().getFullYear()

  // Index of current / prev / next decade
  const currentCentury = `${currentYear}`.slice(0, CENTURY_DIGITS)
  const prevCentury = parseInt(currentCentury) - 1
  const nextCentury = parseInt(currentCentury) + 1

  // Get full years of the year if it is in current / prev / next decade
  const currentCenturyYear = parseInt(`${currentCentury}${yearString}`)
  const prevCenturyYear = parseInt(`${prevCentury}${yearString}`)
  const nextCenturyYear = parseInt(`${nextCentury}${yearString}`)

  // Find the one closest to currentYear
  let minDiff = Infinity
  const fullYear = [
    currentCenturyYear,
    prevCenturyYear,
    nextCenturyYear,
  ].reduce((fullYear: number | undefined, year: number) => {
    const diff = Math.abs(year - currentYear)
    if (diff < minDiff) {
      minDiff = diff
      return year
    }
    return fullYear
  }, undefined)

  return fullYear
}

export default toFullYear