import addDays from "./addDays";



/**
 * 
 * @param index 
 * @param locale The locale code or an array of locale codes 
 * @param format 
 */
const getLocalizedWeekday = (
    index: number = 0, 
    locale?: string | string[], 
    format: "long" | "short" = "long"
): string => {
    const dummyDate = new Date();
    // eg, given index = 4, objDate day = 1, so add 3 days to objDate
    const objDate = addDays(dummyDate, index - dummyDate.getDay())
  
    return objDate.toLocaleString(locale, { weekday: format });
}

export default getLocalizedWeekday