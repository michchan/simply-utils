import getDOMNodesUnder from './getDOMNodesUnder'
/**
 * Find all text nodes under a certain DOM element
 *
 * @param el
 * @category dom
 * @module getDOMTextNodesUnder
 */
function getDOMTextNodesUnder (el: Node): Text[] {
  return getDOMNodesUnder<Text>(el, NodeFilter.SHOW_TEXT)
}

export default getDOMTextNodesUnder