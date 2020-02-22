function getFirstMsOfDate (date: Date = new Date()): Date {
    const clonedDate = new Date(date)
    clonedDate.setHours(0, 0, 0, 0)
    return clonedDate
}

export default getFirstMsOfDate