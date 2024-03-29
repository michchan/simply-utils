import { isChrome } from 'react-device-detect'
import { css } from 'styled-components/macro'
import StyledCss from './_common/StyledCss.type'
/**
 * @category styledComponents
 * @module getChromeScrollBarHiddenFixCss
 */
const getChromeScrollBarHiddenFixCss = <T> (): StyledCss<T> | string => isChrome ? css`
  /* Chrome scrollbar not showing fix */
  overflow-y: overlay;

  ::-webkit-scrollbar {
    appearance: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 7px;
    scrollbar-base-color: rgba(255, 255, 255, 0.2);
    opacity: 0.2;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
` : ''

export default getChromeScrollBarHiddenFixCss