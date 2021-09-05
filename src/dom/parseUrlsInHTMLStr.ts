import replaceUrlsInHTMLStr from './replaceUrlsInHTMLStr'

export const DEFAULT_URL_REPLACER_STR = '<a href=\"$1\">$1</a>'

/**
 * Wrap URLs in HTML string with anchor tags
 *
 * @param text
 * @param isHTML
 * @category dom
 * @module parseUrlsInHTMLStr
 */
const parseUrlsInHTMLStr = (
  htmlStr: string,
  replacer: string = DEFAULT_URL_REPLACER_STR
): string => replaceUrlsInHTMLStr(htmlStr, replacer)
// * Prevent www at start makes url invalid
  .replace(/\<a\shref\=\"www\.(.+)\"\>/g, '<a href="http://www.$1">')

export default parseUrlsInHTMLStr