/**
 * Auto-grow textarea according to content size
 * Reference: https://stackoverflow.com/questions/17772260/textarea-auto-height
 * @category dom
 * @module autoGrowTextArea
 */
const autoGrowTextArea = (el: HTMLTextAreaElement): HTMLTextAreaElement => {
  el.style.height = '0px'
  el.style.height = `${el.scrollHeight + 1}px`
  return el
}
export default autoGrowTextArea