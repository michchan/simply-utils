import { css } from "styled-components";



const getPopUpShadowCss = (
    color: string = '#99999927',
    size: number = 6,
    offsetRatio: number = 1/3,
    offsetDirection: 'right' | 'left' = 'right'
) => {
    const absOffset = size * offsetRatio
    const offset = offsetDirection === 'right' ? absOffset : -absOffset
    return css`
        box-shadow: 0px ${offset}px ${size}px ${color};
    `
}

export default getPopUpShadowCss