import chunk from 'lodash/chunk'

const MIN_RGB_LENGTH = 3
const FULL_RGB_LENGTH = 6
const MIN_RGBA_LENGTH = 4
const FULL_RGBA_LENGTH = 8
const MAX_RGB_VALUE = 255
const NUM_RGB_COMPONENTS = 3
const MAX_HUE = 360
const MAX_HSL_VALUE = 100

/**
 * Helper method that converts hue to rgb value
 * Reference: https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
 */
const hueToRgbValue = (p: number, q: number, t: number): number => {
  const normalizedT = t < 0 ? t + 1 : (t > 1 ? t - 1 : t)
  switch (true) {
    case (normalizedT < 1 / FULL_RGB_LENGTH): return p + ((q - p) * FULL_RGB_LENGTH * normalizedT)
    case (normalizedT < 1 / 2): return q
    case (normalizedT < 2 / MIN_RGB_LENGTH):
      return p + ((q - p) * ((2 / MIN_RGB_LENGTH) - normalizedT) * FULL_RGB_LENGTH)
    default: return p
  }
}

const rgbaToArr = (color: string) => color.replace(/^rgba?\(|\)$|\s+/gi, '').split(',')

const hexToRgbArr = (color: string) => {
  const colorString = color.slice(1)
  // Contains hex codes like ['e', 'e', 'e', 'f', 'f', 'f']
  const hexCodes = color.match(/[0-9a-f]/gi) || []

  const mapHexCodes = () => hexCodes.map(singleHex => parseInt(`${singleHex}${singleHex}`, 16))
  const mapFullHexCodes = () => {
    // Group each 2 hexcodes like:
    // ['3', '4', '3', '4', '3', '4'] -> [['3', '4'], ['3', '4'], ['3', '4']]
    const chunks = chunk(hexCodes, 2)
    // Join each group to make it like ['34', '34', '34']
    const hexCodeGroups = chunks.map(chunk => chunk.join(''))

    return hexCodeGroups.map(hex => parseInt(hex, 16))
  }

  switch (colorString.length) {
    // E.g. #333 === '#333333'
    case MIN_RGB_LENGTH: return mapHexCodes(); break
    // E.g. #333a === '#333333aa' (last 2 digits: alpha channel)
    case MIN_RGBA_LENGTH: return mapHexCodes(); break
    // E.g. '#333333'
    case FULL_RGB_LENGTH: return mapFullHexCodes(); break
    // E.g. '#333333aa' (last 2 digits: alpha channel)
    case FULL_RGBA_LENGTH: return mapFullHexCodes(); break
    default:
      return []
  }
}

/** Reference: https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion */
const hslaToRgbArr = (color: string) => {
  // Array of value strings
  const [hString, sString, lString, aString] = color.replace(/^hsla?\(|\)$| +/gi, '').split(',')
  // Convert h, s, l to 0 - 1 float
  const h = (parseFloat(hString) % MAX_HUE) / MAX_HUE
  const s = parseFloat(sString) / MAX_HSL_VALUE
  const l = parseFloat(lString) / MAX_HSL_VALUE

  // Calculate corresponding rgb
  if (s === 0) {
    return [
      l * MAX_RGB_VALUE,
      l * MAX_RGB_VALUE,
      l * MAX_RGB_VALUE,
      aString,
    ]
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - (l * s)
  const p = (2 * l) - q
  return [
    hueToRgbValue(p, q, h + (1 / NUM_RGB_COMPONENTS)) * MAX_RGB_VALUE,
    hueToRgbValue(p, q, h) * MAX_RGB_VALUE,
    hueToRgbValue(p, q, h - (1 / NUM_RGB_COMPONENTS)) * MAX_RGB_VALUE,
    aString,
  ]
}

/**
 * @author
 * Sandy Lau https://github.com/sandylau333
 * Michael Chan michchandev@gmail.com
 *
 * @param color
 * @category style
 * @module convertColorToRgbaArray
 */
const convertColorToRgbaArray = (color: string): number[] => {
  // Find rgba values. ([ r, g, b, a? ]) (rgb in dec. a from 0 - 1)
  const rgbaStrings: (string | number)[] = (() => {
    // If rgb or rgba
    if (/^rgba?\((\d+, *){2,3}\d+\)$/i.test(color))
      return rgbaToArr(color)
    // If hex (e.g. #123, #1234, #123456, #12345678)
    else if (/^#[0-9a-f]{3,8}$/i.test(color))
      return hexToRgbArr(color)
    // If hsl or hsla (e.g hsl(123, 0%, 0%), hsla(123, 0%, 0%, 0.5))
    else if (/^hsla?\(\d*.?\d+( *, *\d*.?\d+%){2}( *, *\d*.?\d+)?\)$/i.test(color))
      return hslaToRgbArr(color)
    return [0, 0, 0]
  })()

  // Destruct rgbaStrings to set default values
  const [r = 0, g = 0, b = 0, a = 1] = rgbaStrings

  // Round each number
  return [Number(r), Number(g), Number(b), Number(a)].map(n => Math.round(n))
}
export default convertColorToRgbaArray