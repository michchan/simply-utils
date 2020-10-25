import { css } from 'styled-components/macro'
import StyledCss from './common/StyledCss.type'

/**
 * Source: http://apps.eky.hk/css-triangle-generator/
 *
 * @param {string} direction
 * @param {string} color
 * @param {number} width
 * @param {number} height
 */
const getTriangleCss = <T> (
  direction: 'up' | 'down' | 'left' | 'right' = 'down',
  color: string = '#333',
  width: number = 20,
  height: number = 20,
): StyledCss<T> => css`
  width: 0;
  height: 0;
  border-style: solid;
  ${() => {
    switch (direction) {
      case 'right':
        return css`
          border-width: ${height / 2}px 0 ${height / 2}px ${width}px;
          border-color: transparent transparent transparent ${color};
        `
      case 'left':
        return css`
          border-width: ${height / 2}px ${width}px ${height / 2}px 0;
          border-color: transparent ${color} transparent transparent;
        `
      case 'up':
        return css`
          border-width: 0 ${width / 2}px ${height}px ${width / 2}px;
          border-color: transparent transparent ${color} transparent;
        `
      case 'down':
      default:
        return css`
          border-width: ${height}px ${width / 2}px 0 ${width / 2}px;
          border-color: ${color} transparent transparent transparent;
        `
    }
  }}
`

export default getTriangleCss