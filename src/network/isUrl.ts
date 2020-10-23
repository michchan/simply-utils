import urlRegex from '../_common/urlRegex'

const isUrl = (str: string, strict: boolean = true): boolean => (strict ? urlRegex.STRICT : urlRegex.OPTIONAL_WWW).test(str)

export default isUrl