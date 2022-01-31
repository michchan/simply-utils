import { css } from 'styled-components/macro'
import StyledCss from './_common/StyledCss.type'

import getPlusIconCss from './getPlusIconCss'
/**
 * @category styledComponents
 * @module getCrossIconCss
 */
const getCrossIconCss = <T> (
  size: number = 14,
  width: number = 2,
  color: string = '#333',
): StyledCss<T> => css`
  ${getPlusIconCss(size, width, color)}

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

export default getCrossIconCss