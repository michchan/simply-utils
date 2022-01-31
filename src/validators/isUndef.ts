/**
 * @category validators
 * @module isUndef
 */
const isUndef = (o: unknown): o is undefined | void => typeof o === 'undefined' || o === undefined

export default isUndef