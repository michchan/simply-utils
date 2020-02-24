import isFunc from "./isFunc"
import isArr from "utils/array/isArr"



export type Iteratee <T extends Key = Key> = T | ((value: T) => boolean)
export type Mode = 
    | 'whitelist'
    | 'blacklist'

/**
 * Simple helper to check whether the user has an access right
 * 
 * @param value The value of the user's permission
 * @param list The list of permission / permission checker
 * @param mode The mode of checking, either whitelist or blacklist. Default to whitelist.
 */
function hasAccessRights <T extends Key = Key> (
    value: T,
    list: Iteratee<T> | Iteratee<T>[],
    mode: Mode = 'whitelist',
): boolean {
    // Normalize list arg
    const normalizedList = isArr(list) ? list : [list]

    // Iterate through the list
    const result = normalizedList.some(iteratee => {
        const isMatched = (() => {
            if (isFunc(iteratee)) {
                return iteratee(value)
            }
            return `${iteratee}` === `${value}`
        })()
        return isMatched
    })

    return (
        mode === 'whitelist'
            ? result
            : !result
    )
}

export default hasAccessRights