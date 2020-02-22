import isNum from "../number/isNum"



const isDateString = (dateStr: ISOTimestamp | string): boolean => {
    // Empty string 
    if (!dateStr) return false
    
    const parsedDate: number = Date.parse(dateStr)
    
    if ((isNum(parsedDate) && parsedDate > 0) || /^\d+$/g.test(`${parsedDate}`))
        return true

    return false
}

export default isDateString