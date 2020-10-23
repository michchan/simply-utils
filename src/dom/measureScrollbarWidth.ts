/**
 * Source: https://davidwalsh.name/detect-scrollbar-width
 */
const measureScrollbarWidth = (): number => {
  // Create the measurement node
  const scrollDiv = document.createElement('div')
  // Way the hell off screen
  scrollDiv.style.top = '-9999'
  scrollDiv.style.overflow = 'scroll'
  scrollDiv.style.position = 'absolute'

  document.body.appendChild(scrollDiv)

  // Get the scrollbar width
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth

  // Delete the DIV
  document.body.removeChild(scrollDiv)

  return scrollbarWidth
}

export default measureScrollbarWidth