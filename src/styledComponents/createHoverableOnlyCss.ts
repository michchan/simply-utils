import { css } from 'styled-components/macro'
import StyledCss from './_common/StyledCss.type'
/**
 * @category styledComponents
 * @module createHoverableOnlyCss
 */
function createHoverableOnlyCss <T> (styledCss: StyledCss<T>): StyledCss<T> {
  return css`
    /* Hoverable pointer only */
    @media (hover: hover) {
      ${styledCss}
    }
  `
}

export default createHoverableOnlyCss