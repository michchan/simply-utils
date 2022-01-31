import isEmpty from 'lodash/isEmpty'
import { isArr } from '../array'
import isObj from './isObj'
/**
 * Like lodash/isEmpty but also cater empty nested object and array cases.
 * @param o
 * @category object
 * @module isDeepEmpty
 */
const isDeepEmpty = (o: unknown): boolean => {
  if (isObj(o))
    return Object.keys(o).length === 0 || Object.values(o).every(val => isDeepEmpty(val))
  if (isArr(o))
    return o.length === 0 || o.every(item => isDeepEmpty(item))
  return isEmpty(o)
}
export default isDeepEmpty