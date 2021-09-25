import isNum from '../number/isNum'
import fromQueryString from '../network/fromQueryString'
import getSearchParams, { GetSearchParamsLocation } from './getSearchParams'

export interface GetSearchParamOptions {
  isNumberExpected?: boolean;
  /**
    Since argument 'location' can be string pathname,
    it might not necessarily contains search parameters.
    If this argument equals true,
    That means window.location.search will be used
    as the last fallback of deriving search parameters.
    Default to true.
   */
  shouldFallbackWithWindow?: boolean;
}
/**
 * Get single query parameter from location
 *
 * @param location
 * @param key
 * @param defaultValue
 * @param isNumberExpected
 * @param shouldFallbackWithWindow
 * @category routing
 * @module getSearchParam
 * @category routing
 * @module getSearchParam
 */
function getSearchParam <T extends string | number = string> (
  location: GetSearchParamsLocation | string = window.location,
  key: string | number,
  defaultValue: T,
  {
    isNumberExpected,
    shouldFallbackWithWindow = true,
  }: GetSearchParamOptions = {},
): T {
  const search: null | string = getSearchParams(location, shouldFallbackWithWindow)

  if (search === null) return defaultValue

  const { [key]: value } = fromQueryString<{ [k in typeof key]?: string }>(search)

  if (isNumberExpected) {
    // To ensure return number string
    // If the value of searchObj[key] is number followed by any string
    return (isNum(value, true) ? parseInt(value) : defaultValue) as T
  }
  return value as T
}

export default getSearchParam