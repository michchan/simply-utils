import { css, CSSProperties } from 'styled-components'

/**
 * Get style of a disabled element
 *
 * @param opacity
 * @param cursor
 */
const getDisabledCss = (
  opacity: number = 0.5,
  cursor: CSSProperties['cursor'] = 'default',
) => css<{ disabled?: boolean }>`
  ${({ disabled }) => disabled ? css`
    &,
    &:hover,
    &:active {
      opacity: ${opacity};
      cursor: ${cursor};  
    }
  ` : ''}
`

export default getDisabledCss