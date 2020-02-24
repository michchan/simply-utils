
/**
 * Wether the length of the value is greater than a minimum length
 * 
 * @param minLength 
 * @param value 
 */
function isMinLengthAt (
    minLength: number, 
    value: string | number, 
    spaceAllowed: boolean = false
): boolean {
    return new RegExp(`^${spaceAllowed ? '.' : '\\S'}{${minLength},}$`, '').test(`${value}`)
}

export default isMinLengthAt