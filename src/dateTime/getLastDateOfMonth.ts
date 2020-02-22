import isSameMonth from './isSameMonth'
import getLastMsOfDate from './getLastMsOfDate'


function getLastDateOfMonth (date: Date = new Date()): Date {
    // month of given date
    const month = date.getMonth()
    // try if set last date is 31st.
    const tryLastDate = new Date(date.getFullYear(), month, 31)
    // if tryLastDate still in same month of given date
    if (isSameMonth(date, tryLastDate)) {
        return getLastMsOfDate(tryLastDate)
    } else {
        // the last date is 31 - date of tryLastDate
        // e.g. tryLastDate is 2nd, then last date of month should be 29th
        return getLastMsOfDate(new Date(date.getFullYear(), month, 31 - tryLastDate.getDate()))
    }
}

export default getLastDateOfMonth