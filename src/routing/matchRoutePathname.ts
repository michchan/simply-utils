export const PARAM_REGEX_STR = '[a-zA-Z0-9_-]+'

/**
 *
 * Determine if pathname and config path are equal and get the matched route pathname (config path).
 * If pathnames includes path params, it will be determined by equivalent path position,
 * e.g. "/shops/:id/settings" is equal to "/shops/123/settings"
 *
 * @param path The actual pathname displayed on browser navigation bar
 * @param route The route config path for a route of a router like React-Router
 * @param isExact
 */
const matchRoutePathname = (
  path: string,
  route: string,
  isExact: boolean = false
): string | undefined => {
  const pathRegxStr = route
    // Replace optional path params with regex (e.g. "/:key?", ((/[a-zA-Z0-9_-]+)?))
    .replace(new RegExp(`\\/\\:${PARAM_REGEX_STR}\\?`, 'gi'), `((\/${PARAM_REGEX_STR})?)`)
    // Replace path params with regex (e.g. ":key" -> ([[a-zA-Z0-9_-]+]))
    .replace(new RegExp(`\\:${PARAM_REGEX_STR}`, 'gi'), `(${PARAM_REGEX_STR})`)

  const endingSuffix = isExact ? '$' : ''

  const configPathRegex = new RegExp(`^${pathRegxStr}${endingSuffix}`, 'i')

  // Return the route if it is matched
  if (configPathRegex.test(path))
    return route

  // Return undefined if it is not matched
  return undefined
}

export default matchRoutePathname