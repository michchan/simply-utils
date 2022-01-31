const MAX_HUE = 360
export interface GenerateProgressiveColorsOfSameHueOptions {
  // Specity initial lightness (0 - 100)
  // Default to 50
  lightness?: number;
  // Specify initial saturation (0 - 100)
  // Default to 100
  saturation?: number;
  // Change this property of HSL color to give the set of colors
  // Default to lightness
  mode?: 'saturation' | 'lightness';
  // Target saturation / lightness
  // Default to 80
  targetValue?: number;
}
/**
 * Generate a set of colors from original color to changes of targetValue.
 * For example, generateProgressiveColorsOfSameHue(270, 10)
 * to generate 10 purple colors from darker to lighter
 * @param hue 0 - 360. If greater than 360, will use value of mod 360. Default to 270 (purple theme)
 * @param numberOfColors
 * @param options
 * @returns array of HSL color code
 * @category style
 * @module generateProgressiveColorsOfSameHue
 */
const generateProgressiveColorsOfSameHue = (
  hue: number = 270,
  numberOfColors: number,
  options: GenerateProgressiveColorsOfSameHueOptions = {}
): string[] => {
  const {
    lightness = 50,
    saturation = 100,
    mode = 'lightness',
    targetValue = 80,
  } = options

  const normalizedHue = hue % MAX_HUE

  if (mode === 'saturation') {
    // Decrease saturation

    // Saturation diff between colors
    const saturationDiff = numberOfColors > 1
      ? (targetValue - saturation) / (numberOfColors - 1)
      : 0

    return new Array(numberOfColors).fill('')
      .map((d, index) => (
        `hsl(${normalizedHue}, ${saturation + (saturationDiff * index)}%, ${lightness}%)`
      ))
  }
  // Decrease lightness

  // Lightness diff between color
  const lightnessDiff = numberOfColors > 1 ? (targetValue - lightness) / (numberOfColors - 1) : 0

  return new Array(numberOfColors).fill('')
    .map((d, index) => (
      `hsl(${normalizedHue}, ${saturation}%, ${lightness + (lightnessDiff * index)}%)`
    ))
}

export default generateProgressiveColorsOfSameHue