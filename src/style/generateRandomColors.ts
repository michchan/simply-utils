import isNullOrUndef from '../validators/isNullOrUndef'
import shuffle from '../array/shuffle'
const MAX_HUE = 360
const SAT_BASE = 40
const SAT_OFFSET = 60
const LIGHT_BASE = 40
const LIGHT_OFFSET = 40
export interface GenerateRandomColorsOptions {
  // Specify saturation. 0 - 100
  // Default to random 60 - 100
  saturation?: number;
  // Specify lightness. 0 - 100
  // Default to random 30 - 70
  lightness?: number;
}
/**
 * Generate array of random colors
 * @param numberOfColors
 * @param options
 * @returns array of HSL color code
 * @category style
 * @module generateRandomColors
 */
const generateRandomColors = (
  numberOfColors: number,
  options: GenerateRandomColorsOptions = {}
): string[] => {
  const {
    saturation,
    lightness,
  } = options

  // Generate numberOfColors + 1 colors
  const startHue = Math.random() * MAX_HUE

  const hueDiff = MAX_HUE / (numberOfColors)

  const colors = new Array(numberOfColors + 1).fill('')
    .map((d, index) => {
      const derivedSaturation = isNullOrUndef(saturation)
        ? (Math.random() * SAT_BASE) + SAT_OFFSET
        : saturation
      const derivedLightness = isNullOrUndef(lightness)
        ? (Math.random() * LIGHT_BASE) + LIGHT_OFFSET
        : lightness
      return `hsl(${startHue + (hueDiff * index)}, ${derivedSaturation}%, ${derivedLightness}%)`
    })

  // Drop the last color because first color hue is same as last color
  colors.pop()

  // Shuffle colors
  shuffle(colors)

  return colors
}

export default generateRandomColors