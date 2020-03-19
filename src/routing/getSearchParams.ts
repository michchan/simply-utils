import isObj from '../object/isObj'
import { Location, LocationDescriptor } from "history"


/**
 * Get query string from location
 * 
 * @param location 
 * @param useWindowLocationAsFallback 
 */
const getSearchParams = (
    location: Location | LocationDescriptor = window.location,
    // Since argument 'location' can be string pathname, it might not necessarily contains search parameters.
    // If this argument equals true, 
    // that means window.location.search will be used as the last fallback of deriving search parameters.
    useWindowLocationAsFallback: boolean = true,
): null | string => {
    // Return search from location object
    if (isObj(location)) {
        return location.search || null
    }
    // Return search from location string
    const search = location.split('?')[1]
    if (search) 
        return search || null
    // Return search from window.location object
    if (useWindowLocationAsFallback) {
        return window.location.search || null
    }
    // Return null
    return null
}

export default getSearchParams