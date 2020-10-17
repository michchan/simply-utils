/**
 * Find all nodes as a flat list under a certain DOM element
 * Reference: https://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page
 * 
 * @param el 
 */
function getDOMNodesUnder <T extends Node = Node> (
  el: Node,
  /**
   * Any value of NodeFilter. See: https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
   */
  whatToShow: number = NodeFilter.SHOW_ALL,
): T[] {
  let n: null | T = null
  const nodes: T[] = [] 
  const walker = document.createTreeWalker(el, whatToShow, null, false)

  while (n = walker.nextNode() as T | null) nodes.push(n)
  return nodes
}

export default getDOMNodesUnder
