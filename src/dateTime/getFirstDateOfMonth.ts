function getFirstDateOfMonth (date: Date = new Date()): Date {
    return new Date(date.getFullYear(), date.getMonth())
}

export default getFirstDateOfMonth