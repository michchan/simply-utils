import * as array from './array'
import * as arrayBuffer from './arrayBuffer'
import * as async from './async'
import * as dateTime from './dateTime'
import * as dom from './dom'
import * as i18next from './i18next'
import * as math from './math'
import * as media from './media'
import * as network from './network'
import * as number from './number'
import * as reactDom from './reactDom'


/** -------------------- Named export -------------------- */

export * from './array'
export * from './arrayBuffer'
export * from './async'
export * from './dateTime'
export * from './dom'
export * from './i18next'
export * from './math'
export * from './media'
export * from './network'
export * from './number'
export * from './reactDom'

/** -------------------- Module export -------------------- */

export default {
    ...array,
    ...arrayBuffer,
    ...async,
    ...dateTime,
    ...dom,
    ...i18next,
    ...math,
    ...media,
    ...network,
    ...number,
    ...reactDom,
}