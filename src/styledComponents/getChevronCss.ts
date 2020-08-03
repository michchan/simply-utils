import { css } from "styled-components"



/**
 * Get chevron icon css
 * 
 * @param {string} direction 
 * @param {string} color 
 * @param {number} size 
 * @param {number} thickness 
 */
const getChevronCss = (
    direction: 'up' | 'down' | 'left' | 'right' = 'down',
    color: string = '#999',
    size: number = 7,
    thickness: number = 1,
) => css`
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
                    return -45
                case 'right':
                    return 135
                case 'up':
                    return 45
                case 'down':
                default: 
                    return -135
            }
        })()}deg) 

        translate(${(() => {
            switch (direction) {
                case 'left':
                    return `0, 25%`
                case 'right':
                    return `25%, 0`
                case 'up':
                    return `50%, 0`
                case 'down':
                default: 
                    return `0, 50%`
            }
        })()});
    
    margin-right: ${
        direction === 'up' || direction === 'down'
            ? size 
            : 0
    }px;
`

export default getChevronCss