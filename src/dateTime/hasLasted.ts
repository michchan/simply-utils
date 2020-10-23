/**
 * Check if the time has lasted for a certain duration
 *
 * @param prev Previous ISOTimestamp time to compare
 * @param duration The duration to compare
 */
const hasLasted = (prev: string, duration: number, dateNow: Date = new Date()): boolean => {
  const timePrev = new Date(prev).getTime()
  const timeNow = dateNow.getTime()
  return timeNow - timePrev >= duration
}

export default hasLasted