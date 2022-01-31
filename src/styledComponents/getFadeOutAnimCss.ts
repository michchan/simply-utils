import { css, keyframes } from 'styled-components/macro'
import StyledCss from './_common/StyledCss.type'

export const DEFAULT_FADE_OUT_DURATION = 300
const fadeOutAnim = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`
/**
 * @category styledComponents
 * @module getFadeOutAnimCss
 */
const getFadeOutAnimCss = <T> (duration: number = DEFAULT_FADE_OUT_DURATION): StyledCss<T> => css`
  animation: ${fadeOutAnim} ${duration}ms ease-in;
`

export default getFadeOutAnimCss