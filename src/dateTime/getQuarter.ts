export type Quarter = 1 | 2 | 3 | 4

const quarterMap: { [key: string]: Quarter } = {
  '1-3': 1,
  '4-6': 2,
  '7-9': 3,
  '10-12': 4,
}

const getQuarter = (date?: Date): Quarter => {
  const _date = date || new Date()
  // The number returned from `date.getMonth()` starts from 0,
  // So it needs to be incremented by 1
  const month = _date.getMonth() + 1
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