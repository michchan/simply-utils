/**
 * Convert HTMLString to its inner text
 * @param htmlString
 * @category dom
 * @module getInnerTextFromHTMLStr
 * @category dom
 * @module getInnerTextFromHTMLStr
 */
function getInnerTextFromHTMLStr (htmlString: string): string {
  const tempContainerDom = document.createElement('div')
  tempContainerDom.innerHTML = htmlString
  return tempContainerDom.innerText
}

export default getInnerTextFromHTMLStr