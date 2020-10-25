import { css } from 'styled-components/macro'
import StyledCss from './common/StyledCss.type'

const ROTATE_ANGLE_LEFT = -45
const ROTATE_ANGLE_RIGHT = 135
const ROTATE_ANGLE_UP = 45
const ROTATE_ANGLE_DOWN = -135

/**
 * Get chevron icon css
 *
 * @param {string} direction
 * @param {string} color
 * @param {number} size
 * @param {number} thickness
 */
const getChevronCss = <T> (
  direction: 'up' | 'down' | 'left' | 'right' = 'down',
  color: string = '#999',
  size: number = 7,
  thickness: number = 1,
): StyledCss<T> => css`
  display: block;
  content: ' ';
  position: relative;
  width: ${size}px;
  height: ${size}px;
  box-sizing: border-box;
  border-top: solid ${thickness}px ${color};
  border-left: solid ${thickness}px ${color};

  transform: 
    rotate(${(() => {
    switch (direction) {
      case 'left':
        return ROTATE_ANGLE_LEFT
      case 'right':
        return ROTATE_ANGLE_RIGHT
      case 'up':
        return ROTATE_ANGLE_UP
      case 'down':
      default:
        return ROTATE_ANGLE_DOWN
    }
  })()}deg) 

    translate(${(() => {
    switch (direction) {
      case 'left':
        return '0, 25%'
      case 'right':
        return '25%, 0'
      case 'up':
        return '50%, 0'
      case 'down':
      default:
        return '0, 50%'
    }
  })()});
  
  margin-right: ${
  direction === 'up' || direction === 'down'
    ? size
    : 0
}px;
`

export default getChevronCss