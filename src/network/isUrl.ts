import urlRegex from '../_common/urlRegex'
/**
 * @category network
 * @module isUrl
 */
const isUrl = (
  str: string,
  isStrict: boolean = true
): boolean => {
  const regex = isStrict ? urlRegex.STRICT : urlRegex.OPTIONAL_WWW
  return regex.test(str)
}

export default isUrl