const SECONS_IN_HOUR = 3600
const SECONS_IN_MIN = 60
const NUM_DIGITS = 10

/**
 * References: https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
 *
 * @param {Number} seconds
 */
const toHHMMSS = (seconds: number): string => {
  // Don't forget the second param
  const secNum = parseInt(`${seconds}`, 10)
  let hours: string | number = Math.floor(secNum / SECONS_IN_HOUR)
  let minutes: string | number = Math.floor((secNum - (hours * SECONS_IN_HOUR)) / SECONS_IN_MIN)
  let sec: string | number = secNum - (hours * SECONS_IN_HOUR) - (minutes * SECONS_IN_MIN)

  if (hours < NUM_DIGITS) hours = `0${hours}`
  if (minutes < NUM_DIGITS) minutes = `0${minutes}`
  if (sec < NUM_DIGITS) sec = `0${sec}`

  return `${hours}:${minutes}:${sec}`
}

export default toHHMMSS