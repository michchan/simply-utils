import { css } from 'styled-components/macro'
import StyledCss from './common/StyledCss.type'

/**
 * Enable smooth/momentum scrolling like on iOS devices
 */
const getWebkitTouchScrollCss = <T> (): StyledCss<T> => css`
  -webkit-overflow-scrolling: touch;
`

export default getWebkitTouchScrollCss