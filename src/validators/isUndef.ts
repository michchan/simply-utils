// Not using "isUndefined" here to avoid wrong import from other utils library
const isUndef = (o: unknown): o is undefined | void => typeof o === 'undefined' || o === undefined

export default isUndef