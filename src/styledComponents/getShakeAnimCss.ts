import { css, keyframes } from 'styled-components/macro'
import StyledCss from './_common/StyledCss.type'
export const DEFAULT_SHAKE_DURATION = 820
const shakeAnim = keyframes`
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
`
/**
 * Ref: https://css-tricks.com/snippets/css/shake-css-keyframe-animation/
 *
 * @param {number} duration Duration in milliseconds (ms)
 * @returns return styled css
 * @category styledComponents
 * @module getShakeAnimCss
 */
const getShakeAnimCss = <T> (duration: number = DEFAULT_SHAKE_DURATION): StyledCss<T> => css`
  animation: ${shakeAnim} ${duration}ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
`

export default getShakeAnimCss