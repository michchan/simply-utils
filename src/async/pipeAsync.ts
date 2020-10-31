type FuncType <O> = (...args: any[]) => Promise<O>
/**
 * Usage:
 * ```
 * const asyncFunctions: (() => void)[] = Array(6)
 *  .map((v, i) => (input: string) => new Promise(resolve => {
 *    setTimeout(() => {
 *      const nextInput = `${input}-${i}`
 *      console.log('Resolve', i, input, nextInput)
 *      resolve(nextInput)
 *    }, 1000)
 *  }))
 * pipeAsync(...asyncFunctions)('Input to the first function')
 * ```
 */
const pipeAsync = <
  O,
  T extends FuncType<O> = FuncType<O>
> (...functions: T[]) => (input?: O): Promise<O> => functions
  .reduce((chain, func) => chain.then(func), Promise.resolve(input)) as Promise<O>

export default pipeAsync