import qs, { ParsedQs } from 'qs'

/**
 * Parse query string
 *
 * @param str Query string (?a=1&b=2)
 * @param fallback The fallback object
 * @category network
 * @module fromQueryString
 * @category network
 * @module fromQueryString
 */
function fromQueryString <T extends ParsedQs = ParsedQs> (
  str: string,
  fallback: T = {} as T,
): T {
  return (qs.parse(
    /^\?/.test(str) ? str.substr(1) : str
  ) || fallback) as T
}

export default fromQueryString