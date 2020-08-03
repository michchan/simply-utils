import { css } from "styled-components";



const getHideScrollBarCss = () => css`
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
        width: 0px !important;
        -webkit-appearance: none;
    }
`

export default getHideScrollBarCss