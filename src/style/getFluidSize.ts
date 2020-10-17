/**
 * Ref: https://css-tricks.com/snippets/css/fluid-typography/
 * 
 * @param {Number} minSize 
 * @param {Number} maxSize 
 * @param {Number} minViewportWidth 
 * @param {Number} maxViewportWidth 
 */
const getFluidSize = (
  minSize: number = 16, // in px
  maxSize: number = 24, // in px
  minViewportWidth: number = 320, // in px
  maxViewportWidth: number = 1200, // in px
): string => {
  return `calc(${minSize}px + (${maxSize - minSize}) * ((100vw - ${minViewportWidth}px) / (${maxViewportWidth} - ${minViewportWidth})))`
}

export default getFluidSize
