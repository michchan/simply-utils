
const REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i

const isEmail = (str): str is Email => REGEX.test(str) 

export default isEmail
