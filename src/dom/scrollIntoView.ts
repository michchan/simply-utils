function scrollIntoView (
    scrollableElement: null |  HTMLElement | typeof window,
    targetElement: null | HTMLElement,
    scrollByFallback: number = 0
) {

    if (scrollableElement) {
        if (targetElement) {
            // scroll form to middle of window

            // position of form in view
            const formClientY = targetElement.getBoundingClientRect().top
            // scrollable scroll top
            const pageScrollTop = scrollableElement === window 
                ? (scrollableElement as typeof window).scrollY 
                : (scrollableElement as HTMLElement).scrollTop
            // scrollable view height
            const pageClientHeight = scrollableElement === window 
                ? (scrollableElement as typeof window).innerHeight 
                : (scrollableElement as HTMLElement).clientHeight

            // scroll form to middle of view
            scrollableElement.scrollTo({
                top: pageScrollTop + (formClientY - (pageClientHeight / 2)),
                behavior: "smooth"
            })
            
        } else {
            // scroll by some value
            scrollableElement.scrollBy({
                top: scrollByFallback,
                behavior: "smooth"
            })
        }
    }

}

export default scrollIntoView