import { css } from "styled-components"

import getRowContainerCss from "./getRowContainerCss"



const getColumnContainerCss = () => css`
    ${getRowContainerCss()}
    flex-direction: column;
`

export default getColumnContainerCss