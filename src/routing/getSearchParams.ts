import { Location } from 'history'
import isObj from '../object/isObj'
export type GetSearchParamsLocation = Pick<Location, 'search'>
/**
 * Get query string from location
 *
 * @param location
 * @param useWindowLocationAsFallback
 * @category routing
 * @module getSearchParams
 */
const getSearchParams = (
  location: GetSearchParamsLocation | string = window.location,
  /**
    Since argument 'location' can be string pathname,
    it might not necessarily contains search parameters.
    If this argument equals true,
    That means window.location.search will be used
    as the last fallback of deriving search parameters.
    Default to true.
   */
  shouldFallbackWithWindow: boolean = true,
): null | string => {
  // Return search from location object
  if (isObj(location))
    return location.search || null

  // Return search from location string
  const [search] = location.split('?')
  if (search)
    return search || null
  // Return search from window.location object
  if (shouldFallbackWithWindow)
    return window.location.search || null

  // Return null
  return null
}

export default getSearchParams