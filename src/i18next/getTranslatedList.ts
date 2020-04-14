import { ReactNode } from 'react';

import { I18nTranslate } from './types';
import isStr from '../string/isStr';


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
): (string | ReactNode)[] => {
    const results = []
    let buffer: (string | ReactNode) = null
    let i = 0

    do {
        const tKey = `${key? `${key}.` : ''}${i}`

        const text = t(`${i18nNamspace? `${i18nNamspace}:` : ''}${tKey}`)

        /** Test if the result texts are not equal to their i18n keys */
        const hasText = !isStr(text) || !new RegExp(`${tKey}`).test(text)

        buffer = hasText ? text : null

        if (buffer) results.push(buffer)
        
        i++
    } while (buffer);

    return results
}

export default getTranslatedList