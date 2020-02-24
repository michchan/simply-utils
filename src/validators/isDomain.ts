const REGEX = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/

const isDomain = (str: string): str is DomainName => REGEX.test(str)

export default isDomain