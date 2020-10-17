
// Not using "isString" here to avoid wrong import from other utils library
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isStr <T extends string = string> (o: any): o is T {
  return typeof o === 'string'
}

export default isStr
