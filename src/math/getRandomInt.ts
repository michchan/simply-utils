/**
 * Generate a random number in a certain range
 *
 * @param from The inclusive number from
 * @param to The inclusive number to
 */
const getRandomInt = (from: number, to: number): number => {
  const min = Math.ceil(from)
  const max = Math.floor(to)
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * ((max - min + 1) + min))
}

export default getRandomInt