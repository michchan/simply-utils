import * as array from './array'
import * as arrayBuffer from './arrayBuffer'
import * as async from './async'
import * as dateTime from './dateTime'
import * as dom from './dom'
import * as reactDom from './reactDom'


/** -------------------- Named export -------------------- */

export * from './array'
export * from './arrayBuffer'
export * from './async'

/** -------------------- Module export -------------------- */

export default {
    ...array,
    ...arrayBuffer,
    ...async,
    ...dateTime,
    ...dom,
    ...reactDom,
}