/**
 * Ref: https://css-tricks.com/snippets/css/fluid-typography/
 *
 * @param {Number} minSize
 * @param {Number} maxSize
 * @param {Number} minViewportWidth
 * @param {Number} maxViewportWidth
 */
const getFluidSize = (
  // In px
  minSize: number = 16,
  // In px
  maxSize: number = 24,
  // In px
  minViewportWidth: number = 320,
  // In px
  maxViewportWidth: number = 1200,
): string => {
  const min = minSize
  const range = maxSize - minSize
  const minVW = minViewportWidth
  const maxVW = maxViewportWidth
  return `calc(${min}px + ${range} * ((100vw - ${minVW}px) / (${maxVW} - ${minVW})))`
}

export default getFluidSize