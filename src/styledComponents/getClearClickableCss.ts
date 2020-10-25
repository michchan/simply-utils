import { css } from 'styled-components/macro'
import StyledCss from './common/StyledCss.type'
import createHoverableOnlyCss from './createHoverableOnlyCss'

/**
 * Opposite of `getClickableCss`
 */
const getClearClickableCss = <T> (): StyledCss<T> => css`
  cursor: default;
  user-select: auto;
  transition: none;
  ${createHoverableOnlyCss(css`
    &::hover,
    &::active {
      opacity: 1;
    } 
  `)}
`

export default getClearClickableCss