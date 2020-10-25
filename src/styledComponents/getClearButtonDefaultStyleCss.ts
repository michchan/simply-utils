import { css } from 'styled-components/macro'
import StyledCss from './common/StyledCss.type'

/**
 * Clear the default style of a button element
 */
const getClearButtonDefaultStyleCss = <T> (): StyledCss<T> => css`
  appearance: none;
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
`

export default getClearButtonDefaultStyleCss