import isStr from "./isStr"


/**
 * 
 * @param {string | Array<string>} value A string in "key:value,key:value" pattern or an array of string in "key:value" pattern
 * @returns {Object} An object in { [key]: value } pattern 
 */
function keyValueStringToObject <T = { [key: string]: string }> (value: string | string[]): T {
    const result = {} as T
    const arr: string[] = isStr(value)
                            ? value.split(',') 
                            : value

    arr.forEach((str: string) => {
        const [key, value] = str.split(':')
        // @ts-ignore @TODO: Fix type ts(7053)
        result[key] = value
    })

    return result
}

export default keyValueStringToObject