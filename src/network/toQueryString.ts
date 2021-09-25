import qs from 'qs'
import omitBy from 'lodash/omitBy'

import isNullOrUndef from '../validators/isNullOrUndef'

/**
 * Parse object to query string with "?" prefix auto-added
 *
 * @param params
 * @category network
 * @module toQueryString
 * @category network
 * @module toQueryString
 */
function toQueryString <
  T extends { [key: string]: any } = { [key: string]: any }
> (params: T): string {
  const queryString = qs.stringify(
    omitBy(params, value => (
      value === ''
      || isNullOrUndef(value)
    ))
  )
  // Return query string with question mark
  return queryString ? `?${queryString}` : ''
}

export default toQueryString