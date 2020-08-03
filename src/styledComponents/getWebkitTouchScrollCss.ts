import { css } from "styled-components";



/**
 * Enable smooth/momentum scrolling like on iOS devices
 */
const getWebkitTouchScrollCss = () => css`
    -webkit-overflow-scrolling: touch;
`

export default getWebkitTouchScrollCss