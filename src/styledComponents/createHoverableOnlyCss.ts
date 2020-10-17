import { css, SimpleInterpolation, FlattenSimpleInterpolation, FlattenInterpolation, ThemeProps } from "styled-components";


type StyledCss <T = unknown> = FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<T>>

function createHoverableOnlyCss <T> (styledCss: StyledCss<T>) {
  return css`
    /* Hoverable pointer only */
    @media (hover: hover) {
      ${styledCss}
    }
  `
}

export default createHoverableOnlyCss
