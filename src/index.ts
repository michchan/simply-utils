import * as array from './array'
import * as arrayBuffer from './arrayBuffer'
import * as async from './async'


/** -------------------- Named export -------------------- */

export * from './array'
export * from './arrayBuffer'
export * from './async'

/** -------------------- Module export -------------------- */

export default {
    ...array,
    ...arrayBuffer,
    ...async,
}