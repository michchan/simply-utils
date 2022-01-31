const REGEX = /^blob\:https?:\/\//i
/**
 * @category validators
 * @module isBlobUrl
 */
const isBlobUrl = (str: string): boolean => REGEX.test(str)

export default isBlobUrl