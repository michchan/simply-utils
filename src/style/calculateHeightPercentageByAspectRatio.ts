import isNum from '../number/isNum'
const MAX_PERCENT = 100
/**
 * Convert aspect ratio to height percentage for use in the container
 * @param aspectRatio The floating number of aspect ratio of format (W/H). e.g. 12/8
 * @param fallbackPercentage (optional) in format of "XX%". If invalid, use "100%"
 * @returns height in format of "XX%", which is percentage of height to width (H/W)
 * @category style
 * @module calculateHeightPercentageByAspectRatio
 */
const calculateHeightPercentageByAspectRatio = (
  aspectRatio: number | string,
  fallbackPercentage: string = '100%'
): string => {
  // If is number
  if (isNum(aspectRatio, true)) {
    // AspectRatio is W/H but padding top is H/W
    return `${MAX_PERCENT / parseFloat(aspectRatio.toString())}%`
  // If in format of "number:number"
  } else if (/^(\d*\.)?\d+:(\d*\.)?\d+$/.test(aspectRatio.toString())) {
    const [width = '1', height = '1'] = aspectRatio.toString().split(':')
    return `${MAX_PERCENT * (parseFloat(height) / parseFloat(width))}%`
  }
  // Fallback
  return /^(\d*\.)?\d+%$/.test(fallbackPercentage) ? fallbackPercentage : '100%'
}

export default calculateHeightPercentageByAspectRatio