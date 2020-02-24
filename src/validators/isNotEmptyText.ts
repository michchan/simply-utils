const REGEX = /^.+$/i


const isNotEmptyText = (str: string): boolean => REGEX.test(str) 

export default isNotEmptyText
