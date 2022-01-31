export type PipeFunc <T> = (arg: T) => T
/**
 * Compose functions from left to right
 * Reference: https://1loc.dev/#compose-functions-from-left-to-right
 * @category func
 * @module pipe
 */
function pipe <T> (...fns: PipeFunc<T>[]) {
  return (arg: T): T => fns.reduce((y, f) => f(y), arg)
}

export default pipe