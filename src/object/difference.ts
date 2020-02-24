import isEqual from 'lodash/isEqual'
import transform from 'lodash/transform'

import isObj from './isObj'


/**
 * Source: https://gist.github.com/Yimiprod/7ee176597fef230d1451
 * 
 * Deep diff between two next, using lodash
 * @param  {Object} next Object compared
 * @param  {Object} previous   Object to compare with
 * @return {Object}        Return a new next who represent the diff
 */
function difference <T = object> (previous: T, next: T): Partial<T> | null | undefined {
	const changes = (previous: T, next: T) => {
		if (!previous) return next
		if (!next) return null

		// @ts-ignore: @TODO: fix type ts(2769)
		return transform(next, (result, value, key) => {
			if (!isEqual(value, previous[key])) {
				result[key] = (isObj(value) && isObj(previous[key])) 
					// @ts-ignore: @TODO: fix type ts(2352)
					? changes((previous[key] as T), value) 
					: value;
			}
		});
	}
	return changes(previous, next);
}

export default difference