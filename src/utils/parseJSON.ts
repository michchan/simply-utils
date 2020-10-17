import isStr from "../string/isStr"
import isFunc from "../validators/isFunc"


/**
 * Parse JSON string with error catched
 *
 * @param str The string to parse. It is not necessary a valid JSON string.
 * @param logSource The source name to log.
 * @param fallback The fallback value. Default to empty object
 */
function parseJSON <T extends object = object> (
  str: string, 
  noFallbackObj?: boolean,
  log?: (error: Error) => unknown,
): T | {} {
  const fallback = noFallbackObj ? str : {}

  try {
    return isStr(str) ? JSON.parse(str) : fallback
  } catch (error) {
    if (isFunc(log)) {
      log(error)
    }
    return fallback
  }
}

export default parseJSON
