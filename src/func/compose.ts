export type ComposeFunc <T> = (arg: T) => T

/**
 * Compose functions from right to left
 * Reference: https://1loc.dev/#compose-functions
 * @category func
 * @module compose
 */
function compose <T> (...fns: ComposeFunc<T>[]) {
  return (arg: T): T => fns.reduceRight((y, f) => f(y), arg)
}

export default compose