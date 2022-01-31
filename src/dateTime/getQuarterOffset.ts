import { Quarter } from './getQuarter'

const MIN_QUARTER: Quarter = 1
const MAX_QUARTER: Quarter = 4
/**
 * @category dateTime
 * @module getQuarterOffset
 */
const getQuarterOffset = (
  year: number | string,
  quarter: Quarter,
  quarterOffset: number,
): [number, Quarter] => {
  const yr = Number(year)
  const qt = Number(quarter) as Quarter
  const qtOff = Number(quarterOffset)

  const qSum = qt + qtOff
  const q = qSum % MAX_QUARTER
  const yrOff = qSum > MAX_QUARTER
    ? qSum - MAX_QUARTER
    : qSum < MIN_QUARTER
      ? qSum - MIN_QUARTER
      : 0

  const nextQuarter = (q === 0 ? MAX_QUARTER : q) as Quarter
  const nextYear = yr + Math.trunc(qtOff / MAX_QUARTER) + yrOff

  return [nextYear, nextQuarter]
}
export default getQuarterOffset