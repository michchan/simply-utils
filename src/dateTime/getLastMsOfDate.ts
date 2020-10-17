/**
 * 
 * @author Sandy Lau https://github.com/sandylau333
 * @param date 
 */
function getLastMsOfDate (date: Date = new Date()): Date {
  const clonedDate = new Date(date)
  clonedDate.setHours(23, 59, 59, 999)
  return clonedDate
}

export default getLastMsOfDate
