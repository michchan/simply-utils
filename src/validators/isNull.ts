/**
 * @category validators
 * @module isNull
 */
const isNull = (o: unknown): o is null => o === null
export default isNull