import isArr from '../array/isArr'

// The prefix of the params in pathname.
// E.g. /shop/:id/home
// ** Note that this is defined by React-router
const PARAM_PFX = ':'
const PARAM_REGEX = new RegExp(`${PARAM_PFX}[a-z0-9-_\\?]+`, 'i')

type Param = string | number

/**
 * Replace the route pathname (config path) with params.
 * The length of the keys
 *
 * @param path The route config path for a route of a router like React-Router
 * @param params The param or an array of params in order.
 *   e.g. For /shops/:id/orders/:id -> ['shop123', 'order4325']
 * @category routing
 * @module replacePathParams
 * @category routing
 * @module replacePathParams
 */
function replacePathParams (
  path: string,
  params: Param | Param[],
): string {
  const thisParams = isArr(params) ? params : [params]

  return thisParams
    .reduce<string>((prev: string, param: Param) => prev.replace(PARAM_REGEX, `${param}`), path)
}

export default replacePathParams