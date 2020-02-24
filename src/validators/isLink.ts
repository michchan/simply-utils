
// Reference: https://www.regextester.com/93652
const REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

const isLink = (str: string): str is URI => REGEX.test(str)

export default isLink