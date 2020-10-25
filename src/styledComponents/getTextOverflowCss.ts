import { css, CSSProperties } from 'styled-components/macro'
import StyledCss from './common/StyledCss.type'

const getTextOverflowCss = <T> (
  numLines: number = 1,
  trailiing: CSSProperties['textOverflow'] = 'ellipsis',
  shouldUseWebkitBox: boolean = false,
): StyledCss<T> => css`
  white-space: ${(numLines === 1 && !shouldUseWebkitBox) ? 'nowrap' : 'normal'};
  overflow: hidden;
  text-overflow: ${trailiing};
  word-break: break-all;

  ${(numLines > 1 || shouldUseWebkitBox) && css`
    /* !!Multiline will be displayed as "-webkit-box" */
    display: -webkit-box;
    -webkit-line-clamp: ${numLines};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    line-height: 1.5;
  `}
`

export default getTextOverflowCss