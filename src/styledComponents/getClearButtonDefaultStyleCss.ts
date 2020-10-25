import { css } from 'styled-components/macro'
import StyledCss from './common/StyledCss.type'

/**
 * Clear the default style of a button element
 */
const getClearButtonDefaultStyleCss = <T> (): StyledCss<T> => css`
  appearance: none;
  border: 0px;
  background: transparent;
  padding: 0px;
  margin: 0px;
`

export default getClearButtonDefaultStyleCss