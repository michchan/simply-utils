import { css, CSSProperties } from 'styled-components/macro'
import StyledCss from './common/StyledCss.type'

/**
 * Get style of a disabled element
 *
 * @param opacity
 * @param cursor
 */
const getDisabledCss = <T> (
  opacity: number = 0.5,
  cursor: CSSProperties['cursor'] = 'default',
): StyledCss<T> => css<{ disabled?: boolean }>`
  ${({ disabled }) => disabled ? css`
    &,
    &::hover,
    &::active {
      opacity: ${opacity};
      cursor: ${cursor};  
    }
  ` : ''}
`

export default getDisabledCss