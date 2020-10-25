const REGEX = /^\+[0-9]{3,}/

const isPhone = (str: string | number): boolean => REGEX.test(`${str}`)

export default isPhone