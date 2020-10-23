function scrollIntoView (
  scrollableElement: null | HTMLElement | typeof window,
  targetElement: null | HTMLElement,
  scrollByFallback: number = 0
) {
  if (scrollableElement) {
    if (targetElement) {
      // Scroll form to middle of window

      // Position of form in view
      const formClientY = targetElement.getBoundingClientRect().top
      // Scrollable scroll top
      const pageScrollTop = scrollableElement === window
        ? (scrollableElement as typeof window).scrollY
        : (scrollableElement as HTMLElement).scrollTop
      // Scrollable view height
      const pageClientHeight = scrollableElement === window
        ? (scrollableElement as typeof window).innerHeight
        : (scrollableElement as HTMLElement).clientHeight

      // Scroll form to middle of view
      scrollableElement.scrollTo({
        top: pageScrollTop + (formClientY - (pageClientHeight / 2)),
        behavior: 'smooth',
      })
    } else {
      // Scroll by some value
      scrollableElement.scrollBy({
        top: scrollByFallback,
        behavior: 'smooth',
      })
    }
  }
}

export default scrollIntoView