/**
 * Wait for some time in a promise style (timer)
 *
 * Reference: https://stackoverflow.com/a/38956190/9428719
 *
 * @param ms The time in milliseconds to wait
 * @param resolveValues The value(s) to resolve
 * @category async
 * @module wait
 * @category async
 * @module wait
 */
function wait <T extends unknown[]> (ms: number, ...resolveValues: T): Promise<T> {
  return new Promise((resolve: (value: T) => void) => {
    setTimeout(resolve, ms, ...resolveValues)
  })
}

export default wait