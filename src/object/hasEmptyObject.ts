import isEmpty from 'lodash/isEmpty'

export function hasEmptyObject <T = object[]> (objects: T[]): boolean {
  return objects.some(obj => isEmpty(obj))
}

export default hasEmptyObject