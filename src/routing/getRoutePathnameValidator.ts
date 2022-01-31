import matchRoutePathname from './matchRoutePathname'
/**
 *
 * @param route The route config path for a route of a router like React-Router
 * @param isNotExact
 * @category routing
 * @module getRoutePathnameValidator
 */
function getRoutePathnameValidator (
  route: string,
  // E.g. if it has child routes
  isNotExact: boolean = false,
): (pathname: string) => boolean {
  return (pathname: string) => !!matchRoutePathname(pathname, route, !isNotExact)
}

export default getRoutePathnameValidator