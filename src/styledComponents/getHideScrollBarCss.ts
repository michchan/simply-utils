import { css } from 'styled-components/macro'
import StyledCss from './common/StyledCss.type'

const getHideScrollBarCss = <T> (): StyledCss<T> => css`
  /*
    Hide scrollbar
    source: https://www.geeksforgeeks.org/hide-scroll-bar-but-while-still-being-able-to-scroll-using-css/
  */

  /* Hide scrollbar for Firefox */
  overflow: -moz-scrollbars-none;
  scrollbar-width: none;

  /* Hide scrollbar for IE */
  -ms-overflow-style: none;

  /* Hide scrollbar for webkit browser */
  &::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    appearance: none;
  }
`

export default getHideScrollBarCss