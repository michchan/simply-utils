/**
 * Convert HTMLString to its inner text
 * @param htmlString
 */
function getInnerTextFromHTMLStr (htmlString: string): string {
  const tempContainerDom = document.createElement('div')
  tempContainerDom.innerHTML = htmlString
  return tempContainerDom.innerText
}

export default getInnerTextFromHTMLStr