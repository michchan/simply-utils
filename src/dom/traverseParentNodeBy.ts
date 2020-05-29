

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

    // Check next parent
    const nextParent = node.parentElement
    if (nextParent) {
        if (match(nextParent)) {
            return nextParent
        } else {
            // * 'selfInclusive' won't passed since it is only run for the first time
            return traverseParentNodeBy(nextParent, match, false)
        }
    }

    return null
}

export default traverseParentNodeBy