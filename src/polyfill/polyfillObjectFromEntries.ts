/**
 * Source: https://github.com/tc39/proposal-object-from-entries/blob/master/polyfill.js
 * @category polyfill
 * @module polyfillObjectFromEntries
 */
const polyfillObjectFromEntries = (): void => {
  // @ts-expect-error: This is validating
  if (!Object.fromEntries) {
    // @ts-expect-error: This is a polyfill
    Object.fromEntries = function ObjectFromEntries (iter) {
      const obj = {}

      for (const pair of iter) {
        if (Object(pair) !== pair) throw new TypeError('iterable for fromEntries should yield objects')

        /*
         * Consistency with Map: contract is that entry has "0" and "1" keys, not
         * that it is an array or iterable.
         */

        const { 0: key, 1: val } = pair

        Object.defineProperty(obj, key, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: val,
        })
      }

      return obj
    }
  }
}

export default polyfillObjectFromEntries