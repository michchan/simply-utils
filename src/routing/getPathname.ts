import { Location } from 'history'
import isObj from '../object/isObj'

export type GetPathnameLocation = Pick<Location, 'pathname'>
/**
 * @category routing
 * @module getPathname
 */
const getPathname = (param: GetPathnameLocation | string): GetPathnameLocation['pathname'] => (
  isObj<GetPathnameLocation>(param)
    ? param.pathname
    : param
)

export default getPathname