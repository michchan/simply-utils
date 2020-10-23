import getNonEmptyPropertyKeys from './getNonEmptyPropertyKeys'

function getNonEmptyPropertiesCount <T = object> (object: T): number {
  return getNonEmptyPropertyKeys<T>(object).length
}

export default getNonEmptyPropertiesCount