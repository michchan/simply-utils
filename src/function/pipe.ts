export type Func <T> = (arg: T) => T

/**
 * Compose functions from left to right
 * Reference: https://1loc.dev/#compose-functions-from-left-to-right
 */
function pipe <T> (...fns: Func<T>[]) {
    return (arg: T): T => fns.reduce((y, f) => f(y), arg)
}

export default pipe
