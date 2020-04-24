import LINK_REGEX_STR from "../_common/LINK_REGEX_STR"


// Reference: https://regex101.com/r/fics9a/1
const REGEX = new RegExp(`^${LINK_REGEX_STR}$`)

const isLink = (str: string): boolean => REGEX.test(str)

export default isLink