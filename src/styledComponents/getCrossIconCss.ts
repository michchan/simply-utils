import { css } from "styled-components"

import getPlusIconCss from "./getPlusIconCss"



const getCrossIconCss = (
    size: number = 14,
    width: number = 2,
    color: string = '#333',
) => css`
    ${getPlusIconCss(size, width, color)}
    
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`

export default getCrossIconCss
