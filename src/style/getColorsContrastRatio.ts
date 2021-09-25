import getColorLuminance from './getColorLuminance'

const OFFSET = 0.05

/**
 * Get contrast ratio between two color.
 * Smaller result means larger contrast.
 * Reference: https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o
 * @param color1
 * @param color2
 * @category style
 * @module getColorsContrastRatio
 * @category style
 * @module getColorsContrastRatio
 */
const getColorsContrastRatio = (color1: string, color2: string): number => {
  const color1Luminance = getColorLuminance(color1)
  const color2Luminance = getColorLuminance(color2)

  return color1Luminance > color2Luminance
    ? ((color2Luminance + OFFSET) / (color1Luminance + OFFSET))
    : ((color1Luminance + OFFSET) / (color2Luminance + OFFSET))
}

export default getColorsContrastRatio