import urlRegex from '../_common/urlRegex'

/**
 * !@DEPRECATED: Use network/replaceUrls instead
 *
 * Replace all links in text
 *
 * @param text
 * @param regexReplacer
 */
const replaceLinks = (
  text: string,
  regexReplacer: string
): string => text.replace(urlRegex.STRICT_GLOBAL, regexReplacer)

export default replaceLinks