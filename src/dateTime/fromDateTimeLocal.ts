import isDateString from "./isDateString"
import isTimeLocal from "./isTimeLocal"


/**
 * 
 * 
 * @param value string value of date-time, can be format of datetime-local, date-local, time-local or ISO-timestamp
 * @returns ISO-timestamp
 */
const fromDateTimeLocal = (value: string): string => {
    if (isTimeLocal(value)) {
        return (() => {
            const [hours = 0, mins = 0, secs = 0, ms = 0] = value.split(/\:|\./)
            const date = new Date()
            date.setHours(+hours, +mins, +secs, +ms)
            return date.toISOString()
        })()
    }

    // Parse the date string
    if (!isDateString(value)) 
        return ''
    return new Date(value).toISOString()
}

export default fromDateTimeLocal