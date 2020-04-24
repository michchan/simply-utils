import LINK_REGEX_STR from "../_common/LINK_REGEX_STR"

const REGEX = new RegExp(`(${LINK_REGEX_STR})`, 'g')

/**
 * Replace all links in text
 * 
 * @param text 
 * @param regexReplacer 
 */
const replaceLinks = (text: string, regexReplacer: string): string => {
    return text.replace(REGEX, regexReplacer)
}

export default replaceLinks