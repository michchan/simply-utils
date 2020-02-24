import matchRoutePathname from './matchRoutePathname';



/**
 * 
 * @param route The route config path for a route of a router like React-Router
 * @param notExact 
 */
function getRoutePathnameValidator (
    route: string, 
    // e.g. if it has child routes
    notExact: boolean = false,
): (pathname: string) => boolean {
    return (pathname: string) => !!matchRoutePathname(pathname, route, !notExact)
}

export default getRoutePathnameValidator