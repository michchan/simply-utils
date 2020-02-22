import addDays from "./addDays";



const getLocalizedWeekday = (
    index: number = 0, 
    locale?: LocaleCode | LocaleCode[], 
    format: "long" | "short" = "long"
): string => {
    const dummyDate = new Date();
    // eg, given index = 4, objDate day = 1, so add 3 days to objDate
    const objDate = addDays(dummyDate, index - dummyDate.getDay())
  
    return objDate.toLocaleString(locale, { weekday: format });
}

export default getLocalizedWeekday