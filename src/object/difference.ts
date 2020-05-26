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
function difference <T = object> (previous: T, next: T, depth: number = Infinity): Partial<T> | null | undefined {
	const changes = (previous: T, next: T, currentDepth: number) => {
		if (!previous) return next
		if (!next) return null

		// Get next depth
		const nextDepth = currentDepth + 1

		// @ts-ignore: @TODO: fix type ts(2769)
		return transform(next, (result, value, key) => {
			// @ts-ignore: @TODO: Fix type ts(7053)
			if (!isEqual(value, previous[key])) {
				result[key] = (
					isObj(value) 
					// @ts-ignore: @TODO: Fix type ts(7053)
					&& isObj(previous[key])
				) 
					? (() => {
						// * Abort if it reaches max depth 
						if (nextDepth > depth) return value
						// @ts-ignore: @TODO: fix type ts(2352)
						return changes((previous[key] as T), value, nextDepth)
					})()
					: value;
			}
		});
	}
	return changes(previous, next, 1);
}

export default difference