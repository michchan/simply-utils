import convertColorToRgbaArray from './convertColorToRgbaArray'

const RGB_LENGTH = 3
const MAX_RGB_VALUE = 255

const REL_R = 0.2126
const REL_G = 0.7152
const REL_B = 0.0722

const VALUE_THRESOLD = 0.03928
const VALUE_DIVIDEND = 12.92

/**
 * Get color luminance. Return 0 - 1.
 * Reference: https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o
 * @param color
 * @category style
 * @module getColorLuminance
 */
const getColorLuminance = (color: string): number => {
  const colorRgb = convertColorToRgbaArray(color).slice(0, RGB_LENGTH)
  const a = colorRgb.map(value => {
    const v = value / MAX_RGB_VALUE
    return v <= VALUE_THRESOLD
      ? v / VALUE_DIVIDEND
      : (() => {
        const x = 0.055
        const y = 1.055
        const n = 2.4
        return ((v + x) / y) ** n
      })()
  })
  return (a[0] * REL_R) + (a[1] * REL_G) + (a[2] * REL_B)
}

export default getColorLuminance