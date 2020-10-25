import { css, keyframes } from 'styled-components/macro'
import StyledCss from './common/StyledCss.type'

export const DEFAULT_FADE_IN_DURATION = 300
const fadeInAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const getFadeInAnimCss = <T> (duration: number = DEFAULT_FADE_IN_DURATION): StyledCss<T> => css`
  animation: ${fadeInAnim} ${duration}ms ease-in;
`

export default getFadeInAnimCss