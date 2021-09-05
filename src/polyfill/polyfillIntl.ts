import isNullOrUndef from '../validators/isNullOrUndef'

/**
 * !! Caution:
 *   This might cause a large bundle size.
 *   The intl.js core itself is large (3xx KB).
 *   Use only when only few languages are supported.
 *
 * Polyfill for:
 *   Intl.NumberFormat,
 *   Intl.DateTimeFormat,
 *   Intl.RelativeTimeFormat
 *
 * Require packages:
 *   intl
 *   relative-time-format
 * @category polyfill
 * @module polyfillIntl
 */
const polyfillIntl = (
  intlDataGetters: (() => unknown)[],
  relativeTimeFormatDataGetters: (() => unknown)[],
): void => {
  // global here is window equivalent
  if (isNullOrUndef(global.Intl)) {
    // Add Intl.NumberFormat and Intl.DateTimeFormat polyfill
    const IntlPolyfill = require('intl')
    // Add Intl.RelativeTimeFormat polyfill
    const { default: RelativeTimeFormat } = require('relative-time-format')
    // Import data for Intl.NumberFormat and Intl.DateTimeFormat
    intlDataGetters.forEach(getData => getData())
    // Import data for Intl.RelativeTimeFormat
    relativeTimeFormatDataGetters.forEach(getData => {
      const locale = getData()
      RelativeTimeFormat.addLocale(locale)
    })
    global.Intl = IntlPolyfill
    // @ts-expect-error: This is a polyfill
    global.Intl.RelativeTimeFormat = RelativeTimeFormat
  } else {
    // Safari NumberFormat does not have formatToParts so need polyfill too
    const isNumberFormatAvailable = global.Intl.NumberFormat
      && new global.Intl.NumberFormat().formatToParts

    if (!isNumberFormatAvailable || !global.Intl.DateTimeFormat) {
      // Add Intl.NumberFormat and Intl.DateTimeFormat polyfill
      const IntlPolyfill = require('intl')
      // Import data for Intl.NumberFormat and Intl.DateTimeFormat
      intlDataGetters.forEach(getData => getData())

      if (!isNumberFormatAvailable) global.Intl.NumberFormat = IntlPolyfill.NumberFormat
      if (!global.Intl.DateTimeFormat) global.Intl.NumberFormat = IntlPolyfill.DateTimeFormat
    }
    // @ts-expect-error: This is validating
    if (!global.Intl.RelativeTimeFormat) {
      // Add Intl.RelativeTimeFormat polyfill
      const { default: RelativeTimeFormat } = require('relative-time-format')
      // Import data for Intl.RelativeTimeFormat
      relativeTimeFormatDataGetters.forEach(getData => {
        const locale = getData()
        RelativeTimeFormat.addLocale(locale)
      })
      // @ts-expect-error: This is a polyfill
      global.Intl.RelativeTimeFormat = RelativeTimeFormat
    }
  }
}

export default polyfillIntl