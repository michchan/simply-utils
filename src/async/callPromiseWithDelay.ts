/**
 * Call a promise callee with delay
 *
 * @param delay The number of delay
 * @param callee The callee function
 * @category async
 * @module callPromiseWithDelay
 */
function callPromiseWithDelay <T> (
  callee: () => Promise<T>,
  delay: number,
): Promise<T> {
  return new Promise(resolve => {
    setTimeout(async () => {
      const res = await callee()
      resolve(res)
    }, delay)
  })
}

export default callPromiseWithDelay