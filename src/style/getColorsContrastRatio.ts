import getColorLuminance from "./getColorLuminance";

/**
 * Get contrast ratio between two color.
 * Smaller result means larger contrast.
 * Reference: https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o
 * @param color1 
 * @param color2 
 */
const getColorsContrastRatio = (color1: string, color2: string): number => {
    const color1Luminance = getColorLuminance(color1)
    const color2Luminance = getColorLuminance(color2)

    return color1Luminance > color2Luminance 
        ? ((color2Luminance + 0.05) / (color1Luminance + 0.05))
        : ((color1Luminance + 0.05) / (color2Luminance + 0.05));
}

export default getColorsContrastRatio
