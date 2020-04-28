import urlRegex from "../_common/urlRegex"

/**
 * Replace all links in text
 * 
 * @param text 
 * @param regexReplacer 
 */
const replaceUrls = (text: string, regexReplacer: string): string => {
    return text.replace(urlRegex.STRICT_GLOBAL, regexReplacer)
}

export default replaceUrls