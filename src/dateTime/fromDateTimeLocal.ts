import isDateString from "./isDateString"
import isTimeLocal from "./isTimeLocal"


const fromDateTimeLocal = (value: DateTimeLocal | DateLocal | TimeLocal | ISOTimestamp): ISOTimestamp => {
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