import convertColorToRgbaArray from './convertColorToRgbaArray'
/**
 * Get color luminance. Return 0 - 1.
 * Reference: https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o
 * @param color
 */
const getColorLuminance = (color: string): number => {
  const colorRgb = convertColorToRgbaArray(color).slice(0, 3)
  const a = colorRgb.map(v => {
    v /= 255
    return v <= 0.03928
      ? v / 12.92
      : ((v + 0.055) / 1.055) ** 2.4
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

export default getColorLuminance