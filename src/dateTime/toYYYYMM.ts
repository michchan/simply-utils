import zeroPadding from "utils/number/zeroPadding"

const toYYYYMM = (date: Date): YYYYMM => {
    return `${date.getFullYear()}-${zeroPadding(+date.getMonth() + 1)}`
}

export default toYYYYMM