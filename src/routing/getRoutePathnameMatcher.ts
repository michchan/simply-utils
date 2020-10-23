import matchRoutePathname from './matchRoutePathname'

/**
 *
 * @param route The route config path for a route of a router like React-Router
 * @param notExact
 */
function getRoutePathnameMatcher (
  route: string,
  // E.g. if it has child routes
  notExact: boolean = false,
): (pathname: string) => string | undefined {
  return (pathname: string) => matchRoutePathname(pathname, route, !notExact)
}

export default getRoutePathnameMatcher