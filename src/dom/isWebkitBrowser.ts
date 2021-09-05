import { isChrome, isSafari } from 'react-device-detect'

/**
 * Whether it is a webkit based browser
 * @category dom
 * @module isWebkitBrowser
 */
const isWebkitBrowser = (): boolean => isChrome || isSafari

export default isWebkitBrowser