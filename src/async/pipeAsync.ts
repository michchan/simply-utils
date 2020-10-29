/**
 * Usage:
 * const asyncFunctions: (() => void)[] = Array(6)
 *  .map((v, i) => (input: string) => new Promise(resovle => {
 *    setTimeout(() => {
 *      const nextInput = `${input}-${i}`
 *      console.log('Resolve', i, input, nextInput)
 *      resolve(nextInput)
 *    }, 1000)
 *  }))
 * pipeAsync(...asyncFunctions)('Input to the first function')
 */
const pipeAsync = (...functions: any[]) => (input: unknown): any => functions
  .reduce((chain, func) => chain.then(func), Promise.resolve(input))

export default pipeAsync