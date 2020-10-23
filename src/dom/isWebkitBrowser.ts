import { isChrome, isSafari } from 'react-device-detect'

/**
 * Whether it is a webkit based browser
 */
const isWebkitBrowser = (): boolean => isChrome || isSafari

export default isWebkitBrowser