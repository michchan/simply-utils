import getFixedSizeImgCss from './getFixedSizeImgCss'
import StyledCss from './_common/StyledCss.type'
/**
 * @category styledComponents
 * @module getSquaredFixedSizeImgCss
 */
const getSquaredFixedSizeImgCss = <T> (
  size: number,
  bgColor?: string,
): StyledCss<T> => getFixedSizeImgCss(size, size, bgColor)

export default getSquaredFixedSizeImgCss