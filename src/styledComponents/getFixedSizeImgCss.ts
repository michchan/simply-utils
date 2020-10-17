import { css } from "styled-components"



const getFixedSizeImgCss = (
  width: number, 
  height: number, 
  bgColor?: string
) => css`
  width: ${width}px;
  height: ${height}px;
  min-width: ${width}px;
  min-height: ${height}px;

  ${bgColor? css`
    background: ${bgColor};
  `:''}
`

export default getFixedSizeImgCss
