import getLocalizedWeekday from "./getLocalizedWeekday"


/**
 * 
 * @param locale The locale code or an array of locale codes
 * @param format 
 */
const getLocalizedWeekdays = (
    locale?: string | string[], 
    format: "long" | "short" = "long"
): string[] => {
    return new Array(7).fill('').map((d, weekdayIndex) => (
        getLocalizedWeekday(weekdayIndex, locale, format)
    ))
}

export default getLocalizedWeekdays
