import { css, CSSProperties } from "styled-components"



const getTextOverflowCss = (
  numLines: number = 1, 
  trailiing: CSSProperties['textOverflow'] = 'ellipsis',
  forcedWebkitBox: boolean = false,
) => css`
  white-space: ${(numLines === 1 && !forcedWebkitBox) ? 'nowrap' : 'normal'};
  overflow: hidden;
  text-overflow: ${trailiing};
  word-break: break-all;

  ${(numLines > 1 || forcedWebkitBox) && css`
    /* !!Multiline will be displayed as "-webkit-box" */
    display: -webkit-box;
    -webkit-line-clamp: ${numLines};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    line-height: 1.5;
  `}
`

export default getTextOverflowCss
