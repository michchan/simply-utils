import isEmpty from 'lodash/isEmpty'
/**
 * @category object
 * @module hasEmptyObject
 */
export function hasEmptyObject <T = { [key: string]: any }[]> (objects: T[]): boolean {
  return objects.some(obj => isEmpty(obj))
}

export default hasEmptyObject