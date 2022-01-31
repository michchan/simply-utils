import { ReactNode } from 'react'
import { I18nTranslate } from './_types'
import isStr from '../string/isStr'
export interface TranslatedSection {
  title: string | ReactNode;
  description: string | ReactNode;
}
/**
 *
 * @param i18nNamspace
 * @param key The translation key, e.g. 'namespace:title.description'
 * @param t
 * @category i18next
 * @module getTranslatedSections
 */
const getTranslatedSections = (
  i18nNamspace: string,
  key: string,
  t: I18nTranslate | ((key: string) => ReactNode),
  exists: (i18nKey: string) => boolean,
): TranslatedSection[] => {
  const results = []
  let buffer = null
  let i = 0

  do {
    const titleKey = ((): string => {
      const k = `${key ? `${key}.` : ''}${i}.title`
      if (i18nNamspace)
        return `${i18nNamspace}:${k.split(':').pop()}`
      return k
    })()
    const descriptionKey = ((): string => {
      const k = `${key ? `${key}.` : ''}${i}.description`
      if (i18nNamspace)
        return `${i18nNamspace}:${k.split(':').pop()}`
      return k
    })()

    const title = exists(titleKey) ? t(titleKey) : null
    const description = exists(descriptionKey) ? t(descriptionKey) : null

    /** Test if the result texts are not equal to their i18n keys */
    const hasTitle = title !== null && (!isStr(title) || !new RegExp(`${titleKey.split(':').pop()}`).test(title))
    const hasDescription = description !== null && (!isStr(description) || !new RegExp(`${descriptionKey.split(':').pop()}`).test(description))

    buffer = hasTitle || hasDescription ? { title, description } : null

    if (buffer) results.push(buffer)

    i++
  } while (buffer)

  return results
}

export default getTranslatedSections