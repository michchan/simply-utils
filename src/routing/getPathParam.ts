import history from 'history'

import isObj from '../object/isObj'

/**
 *
 * @param location The location object
 * @param route The route config path for a route of a router like React-Router
 * @param paramKey
 * @category routing
 * @module getPathParam
 * @category routing
 * @module getPathParam
 */
const getPathParam = (
  location: history.Location | history.Location['pathname'],
  route: string,
  paramKey: string = ':id',
): string => {
  // Get pathanme from location
  const pathname = isObj<history.Location>(location)
    ? location.pathname
    : location

  const splittedRoute = route.split('/')

  const id = pathname.split('/')[splittedRoute.indexOf(`${paramKey}`)]

  return id
}

export default getPathParam