import generateProgressiveColorsOfSameHue, { GenerateProgressiveColorsOfSameHueOptions } from '../style/generateProgressiveColorsOfSameHue'
import getColorsContrastRatio from '../style/getColorsContrastRatio'

export interface GetProgressiveColorsOfSameHueWithStepsOptions extends Pick<
GenerateProgressiveColorsOfSameHueOptions,
| 'saturation'
| 'lightness'
> {
  // Hue value 0 - 360
  hue: number;
  // Lightness for the smallest value
  // Default to 100
  maxLightness?: number;
  // Largest value, which is the value to be divided into steps.
  maxValue: number;
  // Default to maxValue
  maxColorsCount?: number;
  // Default to maxValue
  // Useful to not show dark color if the value is absolutely small.
  minColorsCount?: number;
  // Text color options under the returned colors background
  // Default to black and white (['#000', '#fff'])
  // If both text color options have same contrast ratio to the background color,
  // The former one will be used.
  textColors?: [ string, string ];
}

export interface GetProgressiveColorsOfSameHueWithStepsReturnType {
  colors: string[];
  textColors: string[];
  colorsCount: number;
  stepSize: number;
  getColor: (value: number) => string;
  getTextColor: (value: number) => string;
}

type O = GetProgressiveColorsOfSameHueWithStepsOptions
type R = GetProgressiveColorsOfSameHueWithStepsReturnType

const getProgressiveColorsOfSameHueWithSteps = ({
  hue,
  saturation,
  lightness,
  maxLightness = 100,
  maxValue,
  maxColorsCount = maxValue,
  minColorsCount = maxValue,
  textColors: textColorOptions = ['#000', '#fff'],
}: O): R => {
  // +1 because visits can be [0, maxVisits], which total (maxValue + 1) numbers
  const numberCount = maxValue + 1
  // Number of colors.
  const colorsCount = Math.min(Math.max(numberCount, minColorsCount), maxColorsCount)
  // Array of color for each step
  const colors = generateProgressiveColorsOfSameHue(hue, colorsCount, {
    saturation,
    lightness,
    mode: 'lightness',
    targetValue: maxLightness,
  }).reverse()

  const [opt0, opt1] = textColorOptions

  // Array of text color for each step depends on its background color
  const textColors = colors.map((color: string) => (
    // Get the text color with smaller contrast ratio value with color (background color)
    getColorsContrastRatio(color, opt1) < getColorsContrastRatio(color, opt0)
      ? opt1
      : opt0
  ))
  // Size of numbers falls in same color.
  const stepSize = numberCount / colorsCount
  // Helper method for getting color that the value falls in
  const getColor = (value: number) => colors[Math.floor(Math.min(value, maxValue) / stepSize)]
  const getTextColorIndex = (value: number) => Math.floor(Math.min(value, maxValue) / stepSize)
  // Helper method for getting text color that the value falls in
  const getTextColor = (value: number) => textColors[getTextColorIndex(value)]

  return {
    colors,
    textColors,
    colorsCount,
    stepSize,
    getColor,
    getTextColor,
  }
}

export default getProgressiveColorsOfSameHueWithSteps