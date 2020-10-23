import isNullOrUndef from '../validators/isNullOrUndef'
import shuffle from '../array/shuffle'

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

  const startHue = Math.random() * 360

  const hueDiff = 360 / (numberOfColors)

  const colors = new Array(numberOfColors + 1).fill('')
    .map((d, index) => {
      const derivedSaturation = isNullOrUndef(saturation) ? Math.random() * 40 + 60 : saturation
      const derivedLightness = isNullOrUndef(lightness) ? Math.random() * 40 + 30 : lightness
      return `hsl(${startHue + hueDiff * index}, ${derivedSaturation}%, ${derivedLightness}%)`
    })

  // Drop the last color because first color hue is same as last color
  colors.pop()

  // Shuffle colors
  shuffle(colors)

  return colors
}

export default generateRandomColors