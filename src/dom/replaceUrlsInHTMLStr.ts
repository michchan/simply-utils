import replaceUrls from '../network/replaceUrls'
import replaceTextsInHTMLStr from './replaceTextsInHTMLStr'
/**
 * Replace URLs in HTML string
 *
 * @param htmlStr
 * @category dom
 * @module replaceUrlsInHTMLStr
 */
const replaceUrlsInHTMLStr = (
  htmlStr: string,
  replacer: string
): string => replaceTextsInHTMLStr(htmlStr, eachHtmlStr => replaceUrls(eachHtmlStr, replacer))

export default replaceUrlsInHTMLStr