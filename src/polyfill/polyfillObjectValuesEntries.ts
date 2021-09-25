/**
 * Source: https://github.com/tc39/proposal-object-values-entries/blob/master/polyfill.js
 * @category polyfill
 * @module polyfillObjectValuesEntries
 * @category polyfill
 * @module polyfillObjectValuesEntries
 */
const polyfillObjectValuesEntries = (): void => {
  // @ts-expect-error: @TODO: Fix type
  const reduce = Function.bind.call(Function.call, Array.prototype.reduce)
  // @ts-expect-error: @TODO: Fix type
  const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable)
  // @ts-expect-error: @TODO: Fix type
  const concat = Function.bind.call(Function.call, Array.prototype.concat)
  const keys = Reflect.ownKeys

  if (!Object.values) {
    // @ts-expect-error: This is a polyfill
    Object.values = function values (O) {
      // @ts-expect-error: @TODO: Fix type
      return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), [])
    }
  }
  if (!Object.entries) {
    // @ts-expect-error: This is a polyfill
    Object.entries = function entries (O) {
      // @ts-expect-error: @TODO: Fix type
      return reduce(keys(O), (e, k) => concat(e, typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : []), [])
    }
  }
}

export default polyfillObjectValuesEntries