import { css, CSSProperties } from 'styled-components/macro'
import StyledCss from './_common/StyledCss.type'
/**
 *
 * @param alignItems Default to 'flex-start'
 * @param justifyContent Default to `alignItems` argument
 * @param flexWrap Default to 'nowrap'
 * @category styledComponents
 * @module getRowFlexboxCss
 */
const getRowFlexboxCss = <T> (
  alignItems: CSSProperties['alignItems'] = 'flex-start',
  justifyContent: CSSProperties['justifyContent'] = alignItems,
  flexWrap: CSSProperties['flexWrap'] = 'nowrap'
): StyledCss<T> => css`
  display: flex;
  flex-direction: row;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
  flex-wrap: ${flexWrap};
`

export default getRowFlexboxCss