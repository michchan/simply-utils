import getNonEmptyPropertyKeys from './getNonEmptyPropertyKeys'
/**
 * @category object
 * @module getNonEmptyPropertiesCount
 */
function getNonEmptyPropertiesCount <T = { [key: string]: any }> (object: T): number {
  return getNonEmptyPropertyKeys<T>(object).length
}

export default getNonEmptyPropertiesCount