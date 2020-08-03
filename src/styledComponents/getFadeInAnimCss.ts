import { css, keyframes } from "styled-components"


export const DEFAULT_FADE_IN_DURATION = 300
const fadeInAnim = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const getFadeInAnimCss = (duration: number = DEFAULT_FADE_IN_DURATION) => css`
    animation: ${fadeInAnim} ${duration}ms ease-in;
`

export default getFadeInAnimCss