import { ID_REGEX_STR } from "./isID";

const REGEX = new RegExp(`^(/|((/?${ID_REGEX_STR})(/${ID_REGEX_STR})*))$`, 'i')

/**
 * Whether it is a directory name
 * 
 * @param value 
 */
const isDirName = (value: string) => REGEX.test(value)

export default isDirName