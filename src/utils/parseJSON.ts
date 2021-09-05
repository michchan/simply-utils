import isStr from '../string/isStr'
import isFunc from '../validators/isFunc'

/**
 * Parse JSON string with error catched
 * @category utils
 * @module parseJSON
 */
function parseJSON <T extends { [key: string]: any } = { [key: string]: any }> (
  str: string,
  shouldNotFallbackAsObj?: boolean,
  log?: (error: Error) => unknown,
): T {
  const fallback = shouldNotFallbackAsObj ? str : {}

  try {
    return isStr(str) ? JSON.parse(str) : fallback
  } catch (error) {
    if (isFunc(log)) log(error)
    return fallback as unknown as T
  }
}

export default parseJSON