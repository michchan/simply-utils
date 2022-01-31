import { keyframes, css } from 'styled-components/macro'
import StyledCss from './_common/StyledCss.type'

const initOpacity = 0.2
export const fadeAnimKeyframes = keyframes`
  0% { opacity: ${initOpacity}; }
  50% { opacity: 1; }
  0% { opacity: ${initOpacity}; }
`
/**
 * @category styledComponents
 * @module getFadingAnimCss
 */
const getFadingAnimCss = <T> (): StyledCss<T> => {
  const fadeDuration = 1400
  return css`
    opacity: ${initOpacity};
    animation: ${fadeAnimKeyframes} ${fadeDuration}ms linear 0ms infinite;
  `
}

export default getFadingAnimCss