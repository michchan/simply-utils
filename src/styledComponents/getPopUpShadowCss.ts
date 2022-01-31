import { css } from 'styled-components/macro'
import StyledCss from './_common/StyledCss.type'

const DEFAULT_OFFSET_RATIO = 0.3333333333333333
/**
 * @category styledComponents
 * @module getPopUpShadowCss
 */
const getPopUpShadowCss = <T> (
  color: string = '#99999927',
  size: number = 6,
  offsetRatio: number = DEFAULT_OFFSET_RATIO,
  offsetDirection: 'right' | 'left' = 'right'
): StyledCss<T> => {
  const absOffset = size * offsetRatio
  const offset = offsetDirection === 'right' ? absOffset : -absOffset
  return css`
    box-shadow: 0 ${offset}px ${size}px ${color};
  `
}

export default getPopUpShadowCss