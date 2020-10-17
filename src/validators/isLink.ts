import urlRegex from "../_common/urlRegex"


// !@DEPRECATED: Use network/isUrl instead
const isLink = (str: string, strict: boolean = true): boolean => {
  return (strict ? urlRegex.STRICT : urlRegex.OPTIONAL_WWW).test(str)
}

export default isLink
