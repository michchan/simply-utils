import convertColorToRgbaArray from "./convertColorToRgbaArray"


/**
 * Add alpha info the given color code.
 * @param color Color code in hex or rgb(a)
 * @param alpha Alpha value. 0 - 1.
 */
const getColorWithAlpha = (color: string, alpha: number): string => {
  const [r, g, b] = convertColorToRgbaArray(color)
  return `rgba(${[r, g, b, alpha].join(',')})`
}

export default getColorWithAlpha
