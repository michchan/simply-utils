import isDate from './isDate';
import isUndef from '../validators/isUndef';


/**
 * Check if `date` is between `start` and `end`.
 * `start` and `end` are count as datetime (in ms) 
 * 
 * @author Sandy Lau https://github.com/sandylau333
 * 
 * @param date 
 * @param start (optional)
 * @param end (optional)
 * @param inclusive (optional) Default false
 */
const isDateBetween = (date: Date, start?: Date, end?: Date, inclusive?: boolean): boolean => {
  if (!isDate(date)) return false

  const startLimit = isUndef(start) || !isDate(start) ? 0 : start.valueOf()
  const endLimit = isUndef(end) || !isDate(end) ? Infinity : end.valueOf()
  const dateValue = date.valueOf()

  if (inclusive) {
    return startLimit <= dateValue && dateValue <= endLimit
  } else {
    return startLimit < dateValue && dateValue < endLimit
  }

}

export default isDateBetween
