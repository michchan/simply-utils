// Not using "isBoolean" here to avoid wrong import from other utils library
const isBool = (o: unknown): o is boolean => typeof o === 'boolean'

export default isBool