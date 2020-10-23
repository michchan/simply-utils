/**
 * Ref: https://css-tricks.com/snippets/css/fluid-typography/
 *
 * @param {Number} minSize
 * @param {Number} maxSize
 * @param {Number} minViewportWidth
 * @param {Number} maxViewportWidth
 */
const getFluidSize = (
  minSize: number = 16, // In px
  maxSize: number = 24, // In px
  minViewportWidth: number = 320, // In px
  maxViewportWidth: number = 1200, // In px
): string => `calc(${minSize}px + (${maxSize - minSize}) * ((100vw - ${minViewportWidth}px) / (${maxViewportWidth} - ${minViewportWidth})))`

export default getFluidSize