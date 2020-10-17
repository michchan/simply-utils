
// Not using "isBoolean" here to avoid wrong import from other utils library
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isBool = (o: any): o is boolean => typeof o === 'boolean'

export default isBool
