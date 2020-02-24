
const REGEX = /^blob\:https?:\/\//i

const isBlobUrl = (str: string): str is BlobURI => REGEX.test(str)

export default isBlobUrl