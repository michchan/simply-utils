// Reference: https://gist.github.com/bgrins/6194623
// ** Do NOT match until the end since base64 URL can be very large!!!
const REGEX = /^data\:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,/i

const isBase64Url = (str: string): str is Base64URI => REGEX.test(str)

export default isBase64Url