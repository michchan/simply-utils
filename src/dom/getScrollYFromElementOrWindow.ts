/**
 * Get scroll-Y number from either window object or HTML element
 *
 * @param el
 * @category dom
 * @module getScrollYFromElementOrWindow
 */
const getScrollYFromElementOrWindow = (el: HTMLElement | typeof window): number => (
  (el as HTMLElement)?.scrollTop
  || (el as typeof window).scrollY
  || 0
)

export default getScrollYFromElementOrWindow