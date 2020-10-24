export type Quarter = 1 | 2 | 3 | 4

const Q1 = 1
const Q2 = 2
const Q3 = 3
const Q4 = 4

const quarterMap: { [key: string]: Quarter } = {
  '1-3': Q1,
  '4-6': Q2,
  '7-9': Q3,
  '10-12': Q4,
}

const getQuarter = (date?: Date): Quarter => {
  const thisDate = date || new Date()
  // The number returned from `date.getMonth()` starts from 0,
  // So it needs to be incremented by 1
  const month = thisDate.getMonth() + 1
  // Find key
  const key = Object.keys(quarterMap).find(k => {
    const [start, end] = k.split('-')
    return Number(start) <= month && Number(end) >= month
  })
  // Throw error if key is not defined
  if (!key) throw new Error('key is undefined from getQuarter')

  return quarterMap[key]
}

export default getQuarter