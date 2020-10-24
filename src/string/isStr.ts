// Not using "isString" here to avoid wrong import from other utils library
function isStr <T extends string = string> (o: unknown): o is T {
  return typeof o === 'string'
}

export default isStr