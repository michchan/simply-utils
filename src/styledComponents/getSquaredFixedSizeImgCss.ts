import getFixedSizeImgCss from './getFixedSizeImgCss'
import StyledCss from './common/StyledCss.type'

const getSquaredFixedSizeImgCss = <T> (
  size: number,
  bgColor?: string,
): StyledCss<T> => getFixedSizeImgCss(size, size, bgColor)

export default getSquaredFixedSizeImgCss