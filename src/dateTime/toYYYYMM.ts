import zeroPadding from "utils/number/zeroPadding"


/**
 * 
 * @param date 
 * @returns A date string of format "YYYY-MM"
 */
const toYYYYMM = (date: Date): string => {
    return `${date.getFullYear()}-${zeroPadding(+date.getMonth() + 1)}`
}

export default toYYYYMM