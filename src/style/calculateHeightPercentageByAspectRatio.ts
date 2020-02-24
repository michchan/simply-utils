import isNum from "../number/isNum"

/**
 * Convert aspect ratio to height percentage for use in the container
 * @param aspectRatio The floating number of aspect ratio of format (W/H). e.g. 12/8
 * @param fallbackPercentage (optional) in format of "XX%". If invalid, use "100%"
 * @returns height in format of "XX%", which is percentage of height to width (H/W)
 */
const calculateHeightPercentageByAspectRatio = (
    aspectRatio: number | string, 
    fallbackPercentage: string = '100%'
): string => {
    // if is number 
    if (isNum(aspectRatio, true) ) {
        // aspectRatio is W/H but padding top is H/W
        return `${100 / parseFloat(aspectRatio.toString())}%`
    }
    // if in format of "number:number"
    else if (/^(\d*\.)?\d+:(\d*\.)?\d+$/.test(aspectRatio.toString())) {
        const [ width = "1", height = "1" ] = aspectRatio.toString().split(":")
        return `${100 * ( parseFloat(height) / parseFloat(width) )}%`
    }
    // fallback
    return /^(\d*\.)?\d+%$/.test(fallbackPercentage) ? fallbackPercentage : '100%'

}

export default calculateHeightPercentageByAspectRatio