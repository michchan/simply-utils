/**
 * Generate array combinations, each of which is of the length of the number of arrays passed (groups)
 * 
 * @param {Array<Array<T>>} 
 *  arrays An array of arrays containing each options (e.g. option groups)
 *  e.g. [['a','b'], ['1', '2'], ['@', '#']]
 * @returns {Array<Array<T>>} 
 *  An array of arrays containing each combinations generated by the passed arrays.
 *  e.g. [['a', '1', '@'], ['a', '1', '#'], ['a', '2', '@']...]
 */
function getMaxLengthCombos <T> (arrays: (T[])[] = []): (T[])[] {
    if (arrays.length === 0) {
        return []
    }

    const results = [] as (T[])[]
    const arraysSorted = arrays.sort((a: T[], b: T[]) => {
        if (a.length < b.length) return 1
        if (a.length > b.length) return -1
        return 0
    })

    const recur = (
        bufferArr: T[] = [],
        currentArr: T[] = [],
    ) => {
        const nextDepth = bufferArr.length + 1

        currentArr.forEach((v: T) => {
            if (nextDepth === arrays.length) {
                results.push([...bufferArr, v])
            } else {
                recur([...bufferArr, v], arrays[nextDepth])  
            }
        })
    }

    recur([], arraysSorted[0])

    return results
}

export default getMaxLengthCombos