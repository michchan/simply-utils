/**
 * @category string
 * @module isStr
 */
function isStr <T extends string = string> (o: unknown): o is T {
  return typeof o === 'string'
}

export default isStr