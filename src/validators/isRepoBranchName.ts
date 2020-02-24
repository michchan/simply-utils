import { ID_REGEX_STR } from "./isID";

const REGEX = new RegExp(`^(${ID_REGEX_STR}/)?${ID_REGEX_STR}$`, 'i')

/**
 * Whether it is a branch name of a repository
 * 
 * @param value 
 */
const isRepoBranchName = (value: string) => REGEX.test(value)

export default isRepoBranchName