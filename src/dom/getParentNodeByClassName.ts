// @DEPRECATED at 2020-04-17
/**
 * @category dom
 * @module getParentNodeByClassName
 */
const getParentNodeByClassName = (
  node: HTMLElement,
  className: string,
): HTMLElement | null | undefined => {
  const nextParent = (node.parentNode as (HTMLElement | null | undefined))

  if (nextParent) {
    if (`${(nextParent.className || '')}`.includes(className))
      return nextParent

    return getParentNodeByClassName(nextParent, className)
  }
  return null
}

export default getParentNodeByClassName