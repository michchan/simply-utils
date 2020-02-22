
// check if on same day (ignore the time)
const isSameDay = (a: Date, b: Date): boolean => {
    const aDay = new Date(a.getFullYear(), a.getMonth(), a.getDate())
    const bDay = new Date(b.getFullYear(), b.getMonth(), b.getDate())
    return aDay.valueOf() === bDay.valueOf()
}

export default isSameDay