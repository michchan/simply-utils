// With slash separator e.g. 12/24
const REGEX = /^\d{2}\/\d{2}$/
const START_MONTH = 1
const END_MONTH = 12

const isCardExp = (str: string): boolean => {
  const isFormatCorrect = REGEX.test(str)

  if (!isFormatCorrect) return false

  const [month, year] = str.split('/')

  const isDate = Number(month) >= START_MONTH && Number(month) <= END_MONTH
    && Number(year) >= Number(`${new Date().getFullYear()}`.substr(2, 2))

  return isDate
}

export default isCardExp