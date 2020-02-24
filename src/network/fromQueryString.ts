import qs from 'qs'


/**
 * Parse query string
 * 
 * @param str Query string (?a=1&b=2)
 * @param fallback The fallback object
 */
function fromQueryString <T extends object  = object> (str: string, fallback: object = {}): T {
    return qs.parse(/^\?/.test(str)? str.substr(1) : str) || fallback
}

export default fromQueryString