const SECONDS_IN_HOUR = 3600
const SECONDS_IN_MIN = 60

/**
 * Get the number of seconds contributing to the time (of a date)
 *
 * @author Sandy Lau https://github.com/sandylau333
 *
 * @param date
 */
const getTimeInSeconds = (date: Date): number => (
  (date.getHours() * SECONDS_IN_HOUR)
    + (date.getMinutes() * SECONDS_IN_MIN)
    + date.getSeconds()
)

export default getTimeInSeconds