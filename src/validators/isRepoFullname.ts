import { ID_REGEX_STR } from "./isID";

const REGEX = new RegExp(`^${ID_REGEX_STR}/${ID_REGEX_STR}$`, 'i')

/**
 * Wether it is a globally-unique repository name
 * 
 * @param value 
 */
const isRepoFullname = (value: string) => REGEX.test(value)

export default isRepoFullname