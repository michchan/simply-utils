import * as _common from './_common'
import * as _polyfills from './_polyfills'
import * as _resources from './_resources'
import * as array from './array'
import * as arrayBuffer from './arrayBuffer'
import * as async from './async'
import * as dateTime from './dateTime'
import * as dom from './dom'
import * as function from './function'
import * as i18next from './i18next'
import * as math from './math'
import * as media from './media'
import * as network from './network'
import * as number from './number'
import * as object from './object'
import * as reactDom from './reactDom'
import * as routing from './routing'
import * as string from './string'
import * as style from './style'
import * as utils from './utils'
import * as validators from './validators'


/** -------------------- Named export -------------------- */

export * from './_common'
export * from './_polyfills'
export * from './_resources'
export * from './array'
export * from './arrayBuffer'
export * from './async'
export * from './dateTime'
export * from './dom'
export * from './function'
export * from './i18next'
export * from './math'
export * from './media'
export * from './network'
export * from './number'
export * from './object'
export * from './reactDom'
export * from './routing'
export * from './string'
export * from './style'
export * from './utils'
export * from './validators'

/** -------------------- Module export -------------------- */

export default {
    ..._common,
    ..._polyfills,
    ..._resources,
    ...array,
    ...arrayBuffer,
    ...async,
    ...dateTime,
    ...dom,
    ...function,
    ...i18next,
    ...math,
    ...media,
    ...network,
    ...number,
    ...object,
    ...reactDom,
    ...routing,
    ...string,
    ...style,
    ...utils,
    ...validators,
}