import { css } from 'styled-components/macro'
import StyledCss from './_common/StyledCss.type'
import createHoverableOnlyCss from './createHoverableOnlyCss'

/**
 * Opposite of `getClickableCss`
 * @category styledComponents
 * @module getClearClickableCss
 * @category styledComponents
 * @module getClearClickableCss
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