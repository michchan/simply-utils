
const REGEX = /^\+[0-9]{3,}/

const isPhone = (str): str is Phone => REGEX.test(str) 

export default isPhone
