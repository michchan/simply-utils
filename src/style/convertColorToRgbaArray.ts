import chunk from 'lodash/chunk'

/**
 * @author
 * Sandy Lau https://github.com/sandylau333
 * Michael Chan michchandev@gmail.com
 *
 * @param color
 */
const convertColorToRgbaArray = (color: string): number[] => {
  // Find rgba values. ([ r, g, b, a? ]) (rgb in dec. a from 0 - 1)
  const rgbaStrings: (string | number)[] = (() => {
    // If rgb or rgba
    if (/^rgba?\((\d+, *){2,3}\d+\)$/i.test(color)) {
      return color.replace(/^rgba?\(|\)$| +/gi, '').split(',')
    }
    // If hex (e.g. #123, #1234, #123456, #12345678)
    else if (/^#[0-9a-f]{3,8}$/i.test(color)) {
      const colorString = color.slice(1)
      // Contains hex codes like ['e', 'e', 'e', 'f', 'f', 'f']
      const hexCodes = color.match(/[0-9a-f]/gi) || []

      switch (colorString.length) {
        // E.g. #333 === '#333333'
        case 3:
        // E.g. #333a === '#333333aa' (last 2 digits: alpha channel)
        case 4:
          return hexCodes.map(singleHex => parseInt(`${singleHex}${singleHex}`, 16))
        // E.g. '#333333'
        case 6:
        // E.g. '#333333aa' (last 2 digits: alpha channel)
        case 8:
          // Group each 2 hexcodes like:
          // ['3', '4', '3', '4', '3', '4'] -> [['3', '4'], ['3', '4'], ['3', '4']]
          const chunks = chunk(hexCodes, 2)
          // Join each group to make it like ['34', '34', '34']
          const hexCodeGroups = chunks.map(chunk => chunk.join(''))

          return hexCodeGroups.map(hex => parseInt(hex, 16))
      }
    }
    // If hsl or hsla (e.g hsl(123, 0%, 0%), hsla(123, 0%, 0%, 0.5))
    else if (/^hsla?\(\d*.?\d+( *, *\d*.?\d+%){2}( *, *\d*.?\d+)?\)$/i.test(color)) {
      // Reference: https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion

      // Array of value strings
      const [hString, sString, lString, aString] = color.replace(/^hsla?\(|\)$| +/gi, '').split(',')
      // Convert h, s, l to 0 - 1 float
      const h = (parseFloat(hString) % 360) / 360
      const s = parseFloat(sString) / 100
      const l = parseFloat(lString) / 100

      // Calculate corresponding rgb
      if (s === 0) {
        return [
          l * 255,
          l * 255,
          l * 255,
          aString,
        ]
      }
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      return [
        hueToRgbValue(p, q, h + 1 / 3) * 255,
        hueToRgbValue(p, q, h) * 255,
        hueToRgbValue(p, q, h - 1 / 3) * 255,
        aString,
      ]
    }
    return [0, 0, 0]
  })()

  // Destruct rgbaStrings to set default values
  const [r = 0, g = 0, b = 0, a = 1] = rgbaStrings

  // Round each number
  return [Number(r), Number(g), Number(b), Number(a)].map(n => Math.round(n))
}

export default convertColorToRgbaArray

/**
 * Helper method that converts hue to rgb value
 * Reference: https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
 */
const hueToRgbValue = (p: number, q: number, t: number): number => {
  const normalizedT = t < 0 ? t + 1 : (t > 1 ? t - 1 : t)
  switch (true) {
    case (normalizedT < 1 / 6): return p + (q - p) * 6 * normalizedT
    case (normalizedT < 1 / 2): return q
    case (normalizedT < 2 / 3): return p + (q - p) * (2 / 3 - normalizedT) * 6
    default: return p
  }
}