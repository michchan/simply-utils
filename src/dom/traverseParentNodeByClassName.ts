import traverseParentNodeBy from "./traverseParentNodeBy"
import { isArr } from "../array"


const traverseParentNodeByClassName = (
    node: HTMLElement,
    className: string | string[],
    selfInclusive?: boolean,
): HTMLElement | null | undefined => {
    // Normalize
    const _className = isArr(className) ? className : [className]

    return traverseParentNodeBy(node, node => {
        return _className.some((className) => (
            (!!node.classList && node.classList.contains(className) )
            || (node.className || '').includes(className)
        ))
    }, selfInclusive)
}

export default traverseParentNodeByClassName