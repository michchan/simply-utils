// Reference: https://gist.github.com/bgrins/6194623
// ** Do NOT match until the end since base64 URL can be very large!!!
const REGEX = /^data\:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,/i
/**
 * @category validators
 * @module isBase64Url
 */
const isBase64Url = (str: string): boolean => REGEX.test(str)

export default isBase64Url