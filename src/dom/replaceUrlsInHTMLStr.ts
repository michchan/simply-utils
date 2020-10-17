import replaceUrls from "../network/replaceUrls"
import replaceTextsInHTMLStr from "./replaceTextsInHTMLStr"


/**
 * Replace URLs in HTML string
 * 
 * @param htmlStr 
 */
const replaceUrlsInHTMLStr = (htmlStr: string, replacer: string): string => {  
  return replaceTextsInHTMLStr(htmlStr, eachHtmlStr => replaceUrls(eachHtmlStr, replacer))
}

export default replaceUrlsInHTMLStr
