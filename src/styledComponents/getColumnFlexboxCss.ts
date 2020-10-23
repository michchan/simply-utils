import { css, CSSProperties } from 'styled-components'

import getRowFlexboxCss from './getRowFlexboxCss'

/**
 *
 * @param alignItems Default to 'flex-start'
 * @param justifyContent Default to `alignItems` argument
 * @param flexWrap Default to 'nowrap'
 */
const getColumnFlexboxCss = (
  alignItems: CSSProperties['alignItems'] = 'flex-start',
  justifyContent: CSSProperties['justifyContent'] = alignItems,
  flexWrap: CSSProperties['flexWrap'] = 'nowrap'
) => css`
  ${getRowFlexboxCss(alignItems, justifyContent, flexWrap)}
  flex-direction: column;
`

export default getColumnFlexboxCss