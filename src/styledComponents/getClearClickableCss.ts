import { css } from 'styled-components'
import createHoverableOnlyCss from './createHoverableOnlyCss'

/**
 * Opposite of `getClickableCss`
 */
const getClearClickableCss = () => css`
  cursor: default;
  user-select: auto;
  transition: none;

  ${createHoverableOnlyCss(css`
    &:hover,
    &:active {
      opacity: 1;
    } 
  `)}
`

export default getClearClickableCss