import urlRegex from '../_common/urlRegex'

/**
 * Replace all links in text
 *
 * @param text
 * @param regexReplacer
 * @category network
 * @module replaceUrls
 */
const replaceUrls = (
  text: string,
  regexReplacer: string
): string => text.replace(urlRegex.STRICT_GLOBAL, regexReplacer)

export default replaceUrls