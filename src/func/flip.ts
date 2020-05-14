export type Func <Args extends unknown[], R> = (...args: Args) => R

/**
 * Reverse the order of arguments
 * Reference: https://1loc.dev/#flip-the-arguments-of-a-function
 */
function flip <Args extends unknown[], Reversed extends unknown[], R> (
    fn: Func<Reversed, R>
) {
    return (...args: Args): R => fn(...(args.reverse() as Reversed))
}

export default flip
