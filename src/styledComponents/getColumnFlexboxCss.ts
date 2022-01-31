import { css, CSSProperties } from 'styled-components/macro'
import StyledCss from './_common/StyledCss.type'
import getRowFlexboxCss from './getRowFlexboxCss'
/**
 *
 * @param alignItems Default to 'flex-start'
 * @param justifyContent Default to `alignItems` argument
 * @param flexWrap Default to 'nowrap'
 * @category styledComponents
 * @module getColumnFlexboxCss
 */
const getColumnFlexboxCss = <T> (
  alignItems: CSSProperties['alignItems'] = 'flex-start',
  justifyContent: CSSProperties['justifyContent'] = alignItems,
  flexWrap: CSSProperties['flexWrap'] = 'nowrap'
): StyledCss<T> => css`
  ${getRowFlexboxCss(alignItems, justifyContent, flexWrap)}
  flex-direction: column;
`

export default getColumnFlexboxCss