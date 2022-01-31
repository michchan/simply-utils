import getDOMTextNodesUnder from './getDOMTextNodesUnder'
// Init dom parser
const domparser = new DOMParser()
/**
 * Replace text in HTML string
 *
 * @param htmlStr
 * @category dom
 * @module replaceTextsInHTMLStr
 */
const replaceTextsInHTMLStr = (
  htmlStr: string,
  replacer: (innerHTML: string) => string,
): string => {
  // Parse HTML string
  const doc = domparser.parseFromString(htmlStr, 'text/html')
  // Get all elements that containing a text node
  const textNodes = getDOMTextNodesUnder(doc.body)
  // Replace URLs in each text node
  textNodes.forEach(node => {
    // Get the parent element of this text node
    const parentEl = node.parentElement
    if (parentEl) {
      // Get the html string of the parent element
      const nodeHTMLStr = parentEl.innerHTML
      // Replace the urls in the innerHTML of its parent element.
      parentEl.innerHTML = replacer(nodeHTMLStr)
    }
  })
  // Return manipulated HTML string
  return doc.body.innerHTML
}

export default replaceTextsInHTMLStr