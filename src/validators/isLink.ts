import urlRegex from '../_common/urlRegex'

/**
 * @category validators
 * @module isLink
 */
const isLink = (
  str: string,
  isStrict: boolean = true
): boolean => (isStrict ? urlRegex.STRICT : urlRegex.OPTIONAL_WWW).test(str)

export default isLink