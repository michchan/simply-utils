
// Not using "isUndefined" here to avoid wrong import from other utils library
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isUndef = (o: any): o is undefined | void => typeof o === 'undefined' || o === undefined

export default isUndef