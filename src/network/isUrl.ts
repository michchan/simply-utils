import urlRegex from '../_common/urlRegex'

const isUrl = (
  str: string,
  isStrict: boolean = true
): boolean => {
  const regex = isStrict ? urlRegex.STRICT : urlRegex.OPTIONAL_WWW
  return regex.test(str)
}

export default isUrl