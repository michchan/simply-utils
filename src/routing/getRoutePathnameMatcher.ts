import matchRoutePathname from './matchRoutePathname'

/**
 *
 * @param route The route config path for a route of a router like React-Router
 * @param isNotExact
 * @category routing
 * @module getRoutePathnameMatcher
 */
function getRoutePathnameMatcher (
  route: string,
  // E.g. if it has child routes
  isNotExact: boolean = false,
): (pathname: string) => string | undefined {
  return (pathname: string) => matchRoutePathname(pathname, route, !isNotExact)
}

export default getRoutePathnameMatcher