import { css, keyframes } from 'styled-components'

export const DEFAULT_FADE_OUT_DURATION = 300
const fadeOutAnim = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const getFadeOutAnimCss = (duration: number = DEFAULT_FADE_OUT_DURATION) => css`
  animation: ${fadeOutAnim} ${duration}ms ease-in;
`

export default getFadeOutAnimCss