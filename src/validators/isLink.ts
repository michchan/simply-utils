import urlRegex from '../_common/urlRegex'

// !@DEPRECATED: Use network/isUrl instead
const isLink = (
  str: string,
  isStrict: boolean = true
): boolean => (isStrict ? urlRegex.STRICT : urlRegex.OPTIONAL_WWW).test(str)

export default isLink