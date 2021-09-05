export interface GenerateProgressiveColorsOptions {
  startHue?: number;
  endHue?: number;
  // 0 - 100
  saturation?: number;
  // 0 - 100
  lightness?: number;
}
/**
 * Generate array of colors like rainbow.
 * Useful to generate colors from warm color to cool color.
 * If difference between endHue and startHue greater than 360,
 * it is possible to got duplicated colors
 * @param numberOfColors
 * @param options
 * @returns array of HSL color code
 * @category style
 * @module generateProgressiveColors
 */
const generateProgressiveColors = (
  numberOfColors: number,
  options: GenerateProgressiveColorsOptions = {}
): string[] => {
  const {
    startHue = 0,
    endHue = 300,
    saturation = 100,
    lightness = 50,
  } = options

  const hueDiff = numberOfColors > 1 ? (endHue - startHue) / (numberOfColors - 1) : 0

  return new Array(numberOfColors).fill('')
    .map((d, index) => (
      `hsl(${startHue + (hueDiff * index)}, ${saturation}%, ${lightness}%)`
    ))
}

export default generateProgressiveColors