
const REGEX = /^blob\:https?:\/\//i

const isBlobUrl = (str: string): boolean => REGEX.test(str)

export default isBlobUrl
