import { css, CSSProperties } from "styled-components";



/**
 * 
 * @param alignItems Default to 'flex-start'
 * @param justifyContent Default to `alignItems` argument
 * @param flexWrap Default to 'nowrap'
 */
const getRowFlexboxCss = (
    alignItems: CSSProperties['alignItems'] = 'flex-start',
    justifyContent: CSSProperties['justifyContent'] = alignItems,
    flexWrap: CSSProperties['flexWrap'] = 'nowrap'
) => css`
    display: flex;
    flex-direction: row;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-wrap: ${flexWrap};
`

export default getRowFlexboxCss