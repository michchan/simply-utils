import qs from 'qs'
import omitBy from 'lodash/omitBy'

import isNullOrUndef from '../validators/isNullOrUndef'

/**
 * Parse object to query string with "?" prefix auto-added
 *
 * @param params
 */
function toQueryString <T extends object = object> (params: T): string {
  const queryString = qs.stringify(
    omitBy(params, value =>
      // @ts-ignore: @TODO: fix type ts(2367)
      value === ''
      || isNullOrUndef(value))
  )

  // Return query string with question mark
  return queryString ? `?${queryString}` : ''
}

export default toQueryString