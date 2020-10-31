import { Quarter } from './getQuarter'

const MAX_QUARTER = 4

const getQuarterOffset = (
  year: number | string,
  quarter: Quarter,
  quarterOffset: number,
): [number, Quarter] => {
  const yr = Number(year)
  const qtoff = quarterOffset

  const nextQuarter = quarter + (qtoff % MAX_QUARTER) as Quarter
  const m = qtoff < 0 ? -1 : 1
  const nextYear = yr + (m * Math.floor(Math.abs(qtoff / MAX_QUARTER)))

  return [nextYear, nextQuarter]
}
export default getQuarterOffset