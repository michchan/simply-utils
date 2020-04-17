

const traverseParentNodeBy = (
    node: HTMLElement,
    // Return true to indicate it is the matched 
    match: (node: HTMLElement) => boolean,
    // Enable this if self is included for matching
    selfInclusive?: boolean,
): HTMLElement | null | undefined => {
    // * This only runs for the first time
    if (selfInclusive) {
        if (match(node)) return node
    }
    const nextParent = (node.parentNode as (HTMLElement | null | undefined))
    if (nextParent) {
        if (match(nextParent)) {
            return nextParent
        } else {
            // * 'selfInclusive' won't passed since it is only run for the first time
            return traverseParentNodeBy(nextParent, match, false)
        }
    } else {
        return null
    }
}

export default traverseParentNodeBy