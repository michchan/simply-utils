const REGEX = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/
/**
 * @category validators
 * @module isDomain
 */
const isDomain = (str: string): boolean => REGEX.test(str)

export default isDomain