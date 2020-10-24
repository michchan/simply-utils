import getNonEmptyPropertyKeys from './getNonEmptyPropertyKeys'

function getNonEmptyPropertiesCount <T = { [key: string]: any }> (object: T): number {
  return getNonEmptyPropertyKeys<T>(object).length
}

export default getNonEmptyPropertiesCount