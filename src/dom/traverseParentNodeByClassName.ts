import traverseParentNodeBy from "./traverseParentNodeBy"


const traverseParentNodeByClassName = (
    node: HTMLElement,
    className: string,
    selfInclusive?: boolean,
): HTMLElement | null | undefined => {
    return traverseParentNodeBy(node, node => {
        return (
            (node.classList || []).contains(className) 
            || (node.className || '').includes(className)
        )
    }, selfInclusive)
}

export default traverseParentNodeByClassName