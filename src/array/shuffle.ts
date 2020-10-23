/**
 * Shuffles array in place.
 *
 * Reference: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 *
 * @param {Array} a items An array containing the items.
 */
export function shuffle <A extends unknown[] = unknown[]> (a: A): A {
  let j; let x; let i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

export default shuffle