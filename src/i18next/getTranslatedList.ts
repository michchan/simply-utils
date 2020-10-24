import { ReactNode } from 'react'

import { I18nTranslate } from './types'
import isStr from '../string/isStr'

/**
 *
 * @param i18nNamspace
 * @param key The translation key, e.g. 'namespace:title.description'
 * @param t
 */
const getTranslatedList = (
  i18nNamspace: string,
  key: string,
  t: I18nTranslate | ((key: string) => ReactNode),
  exists: (i18nKey: string) => boolean,
): (string | ReactNode
  )[] => {
  const results = []
  let buffer: (string | ReactNode) = null
  let i = 0

  do {
    // Create key and remove namespace
    const tKey = ((): string => {
      const k = `${key ? `${key}.` : ''}${i}`
      if (i18nNamspace)
        return `${i18nNamspace}:${k.split(':').pop()}`
      return k
    })()

    // Translate text
    const text = exists(tKey) ? t(tKey) : null

    /** Test if the result texts are not equal to their i18n keys */
    const hasText = text !== null && (!isStr(text) || !new RegExp(`${tKey.split(':').pop()}`).test(text)
    )
    buffer = hasText ? text : null

    if (buffer) results.push(buffer)

    i++
  } while (buffer)

  return results
}

export default getTranslatedList