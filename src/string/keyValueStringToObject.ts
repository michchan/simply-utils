import isStr from "./isStr"


/**
 * 
 * @param {string | Array<string>} value A string in "key:value,key:value" pattern or an array of string in "key:value" pattern
 * @returns {Object} An object in { [key]: value } pattern 
 */
const keyValueStringToObject = (value: Commas<string> | string[]): ObjMap<string> => {
    const result = {}
    const arr: string[] = isStr(value)
                            ? value.split(',') 
                            : value

    arr.forEach((str: string) => {
        const [key, value] = str.split(':')
        result[key] = value
    })

    return result
}

export default keyValueStringToObject