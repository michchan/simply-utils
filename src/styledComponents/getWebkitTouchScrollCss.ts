import { css } from 'styled-components/macro'
import StyledCss from './_common/StyledCss.type'
/**
 * Enable smooth/momentum scrolling like on iOS devices
 * @category styledComponents
 * @module getWebkitTouchScrollCss
 */
const getWebkitTouchScrollCss = <T> (): StyledCss<T> => css`
  -webkit-overflow-scrolling: touch;
`

export default getWebkitTouchScrollCss