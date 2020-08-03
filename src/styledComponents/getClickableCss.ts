import { css, CSSProperties } from "styled-components"

import createHoverableOnlyCss from "./createHoverableOnlyCss"
import getDisabledCss from "./getDisabledCss"



/**
 * Get common css to make an element looks and feels clickable.
 * 
 * @param hoverOpacity 
 * @param activeOpacity 
 * @param disabledOpacity 
 * @param disabledCursor 
 */
const getClickableCss = (
    hoverOpacity: number = 0.7, 
    activeOpacity: number = 0.5,
    disabledOpacity?: number,
    disabledCursor?: CSSProperties['cursor'],
) => css`
    cursor: pointer;
    user-select: none;
    transition: opacity 0.1s ease-in-out;

    ${createHoverableOnlyCss(css`
        &:hover {
            opacity: ${hoverOpacity};
        }

        &:active {
            opacity: ${activeOpacity};
        }
    `)}

    ${getDisabledCss(disabledOpacity, disabledCursor)}
`

export default getClickableCss