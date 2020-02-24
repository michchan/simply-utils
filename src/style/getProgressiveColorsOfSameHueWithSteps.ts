import generateProgressiveColorsOfSameHue, { Options as ProgressiveColorsOptions } from "../style/generateProgressiveColorsOfSameHue"
import getColorsContrastRatio from "../style/getColorsContrastRatio"

export interface Options extends Pick<ProgressiveColorsOptions,
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
    // If both text color options have same contrast ratio to the background color, the former one will be used.
    textColors?: [ string, string ];
}

export interface ReturnType {
    colors: string[];
    textColors: string[];
    colorsCount: number;
    stepSize: number;
    getColor: (value: number) => string;
    getTextColor: (value: number) => string;
}


const getProgressiveColorsOfSameHueWithSteps = (options: Options) => {
    const {
        hue,
        saturation,
        lightness,
        maxLightness = 100,
        maxValue,
        maxColorsCount = maxValue,
        minColorsCount = maxValue,
        textColors: textColorOptions = ['#000', '#fff']
    } = options

    // +1 because visits can be [0, maxVisits], which total (maxValue + 1) numbers
    const numberCount = maxValue + 1

    // Number of colors.
    const colorsCount = Math.min(Math.max(numberCount, minColorsCount), maxColorsCount)

    // Array of color for each step
    const colors = generateProgressiveColorsOfSameHue(hue, colorsCount, {
        saturation,
        lightness,
        mode: 'lightness',
        targetValue: maxLightness
    }).reverse()

    // Array of text color for each step depends on its background color
    const textColors = colors.map((color: string) => (
        // Get the text color with smaller contrast ratio value with color (background color)
        getColorsContrastRatio(color, textColorOptions[1]) < getColorsContrastRatio(color, textColorOptions[0])
            ? textColorOptions[1]
            : textColorOptions[0]
    ))

    // Size of numbers falls in same color.
    const stepSize = numberCount / colorsCount

    // Helper method for getting color that the value falls in
    const getColor = (value: number) => {
        return colors[Math.floor(Math.min(value, maxValue) / stepSize)]
    }

    // Helper method for getting text color that the value falls in
    const getTextColor = (value: number) => {
        return textColors[Math.floor(Math.min(value, maxValue) / stepSize)]
    }
    
    return {
        colors,
        textColors,
        colorsCount,
        stepSize,
        getColor,
        getTextColor
    }
}

export default getProgressiveColorsOfSameHueWithSteps