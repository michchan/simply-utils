import { Location, LocationDescriptor } from 'history';
import isNum from '../number/isNum';
import fromQueryString from '../network/fromQueryString';
import getSearchParams from './getSearchParams';



/**
 * Get single query parameter from location
 * 
 * @param location 
 * @param key 
 * @param defaultValue 
 * @param numberExpected 
 * @param useWindowLocationAsFallback 
 */
function getSearchParam <T extends string | number = string> (
  location: LocationDescriptor | Location = window.location, 
  key: string | number,
  defaultValue: T,
  numberExpected?: boolean,
  // Since argument 'location' can be string pathname, it might not necessarily contains search parameters.
  // If this argument equals true, 
  // that means window.location.search will be used as the last fallback of deriving search parameters.
  useWindowLocationAsFallback: boolean = true,
): T {
  const search: null | string = getSearchParams(location, useWindowLocationAsFallback)
  
  if (search === null) return defaultValue
    
  const { [key]: value } = fromQueryString<{ [k in typeof key]?: string }>(search)

  if (numberExpected) {
    // To ensure return number string 
    // if the value of searchObj[key] is number followed by any string
    return (isNum(value, true) ? parseInt(value) : defaultValue) as T
  }
  return value as T
}

export default getSearchParam
