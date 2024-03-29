import { css } from 'styled-components/macro'
import StyledCss from './_common/StyledCss.type'
/**
 * @category styledComponents
 * @module getPlusIconCss
 */
const getPlusIconCss = <T> (
  size: number = 14,
  width: number = 2,
  color: string = '#333',
): StyledCss<T> => css`
  &::before,
  &::after {
    position: absolute;
    display: block;
    content: ' ';
    height: ${size}px;
    width: ${width}px;
    background: ${color};
    z-index: 1;
  }

  &::after {
    transform: rotate(-90deg);
  }
`

export default getPlusIconCss