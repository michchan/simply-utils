import parseBooleanStr from '../utils/parseBooleanStr'

/**
 * The elements include:
 * select, textarea, input[type=text], input[type=date], input[type=password],
 * input[type=email], input[type=number], div[contenteditable]
 * @param el
 * @category dom
 * @module isUserInputElement
 */
const isUserInputElement = (el: HTMLElement): boolean => (
  /^select$/i.test(el.tagName)
  || /^textarea$/i.test(el.tagName)
  || (/^div$/i.test(el.tagName) && parseBooleanStr(el.contentEditable) === true)
  || (
    /^input$/i.test(el.tagName)
    && /^(text|date|password|email|number)$/i.test((el as HTMLInputElement).type)
  )
)

export default isUserInputElement