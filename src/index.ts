import * as AWS from './AWS'
import * as _common from './_common'
import * as algo from './algo'
import * as array from './array'
import * as arrayBuffer from './arrayBuffer'
import * as async from './async'
import * as dateTime from './dateTime'
import * as dom from './dom'
import * as func from './func'
import * as i18next from './i18next'
import * as math from './math'
import * as media from './media'
import * as network from './network'
import * as number from './number'
import * as object from './object'
import * as pagination from './pagination'
import * as polyfill from './polyfill'
import * as reactDom from './reactDom'
import * as routing from './routing'
import * as scraping from './scraping'
import * as string from './string'
import * as style from './style'
import * as styledComponents from './styledComponents'
import * as telegram from './telegram'
import * as utils from './utils'
import * as validators from './validators'

/** -------------------- Named export -------------------- */

export * from './AWS'
export * from './_common'
export * from './algo'
export * from './array'
export * from './arrayBuffer'
export * from './async'
export * from './dateTime'
export * from './dom'
export * from './func'
export * from './i18next'
export * from './math'
export * from './media'
export * from './network'
export * from './number'
export * from './object'
export * from './pagination'
export * from './polyfill'
export * from './reactDom'
export * from './routing'
export * from './scraping'
export * from './string'
export * from './style'
export * from './styledComponents'
export * from './telegram'
export * from './utils'
export * from './validators'

/** -------------------- Module export -------------------- */

export default {
  ...AWS,
  ..._common,
  ...algo,
  ...array,
  ...arrayBuffer,
  ...async,
  ...dateTime,
  ...dom,
  ...func,
  ...i18next,
  ...math,
  ...media,
  ...network,
  ...number,
  ...object,
  ...pagination,
  ...polyfill,
  ...reactDom,
  ...routing,
  ...scraping,
  ...string,
  ...style,
  ...styledComponents,
  ...telegram,
  ...utils,
  ...validators,
}