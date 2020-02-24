const REGEX = /^.+$/i


const isNotEmptyText = (str): boolean => REGEX.test(str) 

export default isNotEmptyText
