

/**
 * Get scroll-Y number from either window object or HTML element
 * 
 * @param el 
 */
const getScrollYFromElementOrWindow = (el: HTMLElement | typeof window): number => {
    return (el as HTMLElement)?.scrollTop || (el as typeof window).scrollY || 0
}

export default getScrollYFromElementOrWindow