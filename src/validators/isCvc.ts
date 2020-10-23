const REGEX = /^\d{3}$/

const isCvc = (str: string): boolean => REGEX.test(str)

export default isCvc