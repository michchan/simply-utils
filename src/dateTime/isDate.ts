const isDate = (date: Date): boolean => date instanceof Date && !isNaN(date.valueOf())

export default isDate