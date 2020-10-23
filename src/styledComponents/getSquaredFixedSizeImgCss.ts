import getFixedSizeImgCss from './getFixedSizeImgCss'

const getSquaredFixedSizeImgCss = (
  size: number,
  bgColor?: string,
) => getFixedSizeImgCss(size, size, bgColor)

export default getSquaredFixedSizeImgCss