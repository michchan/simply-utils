import getLocalizedWeekday from "./getLocalizedWeekday"


const getLocalizedWeekdays = (
    locale?: LocaleCode | LocaleCode[], 
    format: "long" | "short" = "long"
): string[] => {
    return new Array(7).fill('').map((d, weekdayIndex) => (
        getLocalizedWeekday(weekdayIndex, locale, format)
    ))
}

export default getLocalizedWeekdays
