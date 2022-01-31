import traverseParentNodeBy from './traverseParentNodeBy'
import { isArr } from '../array'
import isFunc from '../validators/isFunc'
/**
 * @category dom
 * @module traverseParentNodeByClassName
 */
const traverseParentNodeByClassName = (
  node: HTMLElement,
  className: string | string[],
  isSelfInclusive?: boolean,
): HTMLElement | null | undefined => {
  // Normalize
  const classNames = isArr(className) ? className : [className]

  return traverseParentNodeBy(node, node => classNames.some(className => {
    const nodeClassName = node.className ?? ''
    const isInClassList = !!node.classList && node.classList.contains(className)
    const isInClassName = isFunc(nodeClassName.includes) && nodeClassName.includes(className)
    return isInClassList || isInClassName
  }), isSelfInclusive)
}

export default traverseParentNodeByClassName