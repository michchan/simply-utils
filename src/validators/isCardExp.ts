
// With slash separator e.g. 12/24
const REGEX = /^\d{2}\/\d{2}$/

const isCardExp = (str: string): boolean => {
    const isFormatCorrect = REGEX.test(str)

    if (!isFormatCorrect) return false

    const [month, year] = str.split('/')  

    const isDate = +month >= 1 && +month <= 12 &&
                    +year >= +`${new Date().getFullYear()}`.substr(2, 2)

    return isDate
}

export default isCardExp