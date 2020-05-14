export type Func <T> = (arg: T) => T

/**
 * Compose functions from right to left
 * Reference: https://1loc.dev/#compose-functions
 */
function compose <T> (...fns: Func<T>[]) {
    return (arg: T): T => fns.reduceRight((y, f) => f(y), arg)
}

export default compose
