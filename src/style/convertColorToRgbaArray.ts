

const convertColorToRgbaArray = (color: string): number[] => {
    // find rgba values. ([ r, g, b, a? ]) (rgb in dec. a from 0 - 1)
    const rgbaStrings: (string | number)[] = (() => {
        // if rgb or rgba
        if (/^rgba?\((\d+, *){2,3}\d+\)$/i.test(color)) {          
            return color.replace(/^rgba?\(|\)$| +/gi, '').split(',')
        }
        // if hex (e.g. #123, #1234, #123456, #12345678)
        else if (/^#[0-9a-f]{3,8}$/i.test(color)) {
            const colorString = color.slice(1)
            const regexArr = color.match(/[0-9a-f]/gi) || []

            switch (colorString.length) {
                case 3:
                case 4:
                    return regexArr.map(singleHex => parseInt(`${singleHex}${singleHex}`, 16))
                case 6:
                case 8:
                    return regexArr.map(hex => parseInt(hex, 16))
            }
        }
        // if hsl or hsla (e.g hsl(123, 0%, 0%), hsla(123, 0%, 0%, 0.5))
        else if (/^hsla?\(\d*.?\d+( *, *\d*.?\d+%){2}( *, *\d*.?\d+)?\)$/i.test(color)) {
            // Reference: https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion

            // array of value strings
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
                    aString
                ]
            } else {
                const q = l < 0.5 ? l * (1 + s) : l + s - l * s
                const p = 2 * l - q
                return [
                    hueToRgbValue(p, q, h + 1/3) * 255,
                    hueToRgbValue(p, q, h) * 255,
                    hueToRgbValue(p, q, h - 1/3) * 255,
                    aString
                ]
            }
        }
        return [0, 0, 0]
    })()

    // destruct rgbaStrings to set default values
    const [r = 0, g = 0, b = 0, a = 1] = rgbaStrings

    return [+r, +g, +b, +a]
}

export default convertColorToRgbaArray


/**
 * Helper method that converts hue to rgb value
 * Reference: https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
 */
const hueToRgbValue = (p: number, q: number, t: number): number => {
    const normalizedT = t < 0 ? t + 1 : (t > 1 ? t - 1 : t)
    switch (true) {
        case (normalizedT < 1/6): return p + (q - p) * 6 * normalizedT
        case (normalizedT < 1/2): return q
        case (normalizedT < 2/3): return p + (q - p) * (2/3 - normalizedT) * 6
        default: return p
    }
}