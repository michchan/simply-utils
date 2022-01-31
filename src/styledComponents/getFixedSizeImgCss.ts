import { css } from 'styled-components/macro'
import StyledCss from './_common/StyledCss.type'
/**
 * @category styledComponents
 * @module getFixedSizeImgCss
 */
const getFixedSizeImgCss = <T> (
  width: number,
  height: number,
  bgColor?: string
): StyledCss<T> => css`
  width: ${width}px;
  height: ${height}px;
  min-width: ${width}px;
  min-height: ${height}px;
  ${bgColor ? css`
    background: ${bgColor};
  ` : ''}
`

export default getFixedSizeImgCss