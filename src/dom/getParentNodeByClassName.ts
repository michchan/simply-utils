

// @TODO: Define correct Node type
const getParentNodeByClassName = (
    node: HTMLElement,
    className: string,
): HTMLElement | null | undefined => {
    const nextParent = (node.parentNode as (HTMLElement | null | undefined))

    if (nextParent) {
        if (`${(nextParent.className || '')}`.includes(className)) {
            return nextParent
        } else {
            return getParentNodeByClassName(nextParent, className)
        }
    } else {
        return null
    }
}

export default getParentNodeByClassName