import traverseParentNodeBy from "./traverseParentNodeBy"
import { isArr } from "../array"
import isFunc from "../validators/isFunc"


const traverseParentNodeByClassName = (
    node: HTMLElement,
    className: string | string[],
    selfInclusive?: boolean,
): HTMLElement | null | undefined => {
    // Normalize
    const _className = isArr(className) ? className : [className]

    return traverseParentNodeBy(node, node => {
        return _className.some((className) => {
            const nodeClassName = node.className ?? ''
            const isInClassList = !!node.classList && node.classList.contains(className)
            const isInClassName = isFunc(nodeClassName.includes) && nodeClassName.includes(className)
            return isInClassList || isInClassName
        })
    }, selfInclusive)
}

export default traverseParentNodeByClassName