/**
 * @category validators
 * @module isBool
 */
const isBool = (o: unknown): o is boolean => typeof o === 'boolean'

export default isBool