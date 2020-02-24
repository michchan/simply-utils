import { ReactNode } from 'react';

import { I18nTranslate } from './types';
import isStr from '../string/isStr';


export interface TranslatedSection {
    title: string | ReactNode; 
    description: string | ReactNode;
}

/**
 * 
 * @param i18nNamspace 
 * @param key The translation key, e.g. 'namespace:title.description'
 * @param t 
 */
const getTranslatedSections = (
    i18nNamspace: string, 
    key: string, 
    t: I18nTranslate | ((key: string) => ReactNode),
): TranslatedSection[] => {
    const results = []
    let buffer = null
    let i = 0

    do {
        const titleKey = `${key? `${key}.` : ''}${i}.title`
        const descriptionKey = `${key? `${key}.` : ''}${i}.description`

        const title = t(`${i18nNamspace? `${i18nNamspace}:` : ''}${titleKey}`)
        const description = t(`${i18nNamspace? `${i18nNamspace}:` : ''}${descriptionKey}`)

        /** Test if the result texts are not equal to their i18n keys */
        const hasTitle = !isStr(title) || !new RegExp(`${titleKey}`).test(title)
        const hasDescription = !isStr(description) || !new RegExp(`${descriptionKey}`).test(description)

        buffer = hasTitle && hasDescription? { title, description } : null

        if (buffer) results.push(buffer)
        
        i++
    } while (buffer);

    return results
}

export default getTranslatedSections