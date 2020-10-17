

/**
 * Get the number of seconds contributing to the time (of a date)
 * 
 * @author Sandy Lau https://github.com/sandylau333
 * 
 * @param date 
 */
const getTimeInSeconds = (date: Date): number => {
  return (
    date.getHours() * 3600
    + date.getMinutes() * 60
    + date.getSeconds() 
  )
}

export default getTimeInSeconds
