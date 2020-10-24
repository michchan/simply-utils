const pipeAsync = (...functions: any[]) => (input: unknown): any => functions
  .reduce((chain, func) => chain.then(func), Promise.resolve(input))

export default pipeAsync