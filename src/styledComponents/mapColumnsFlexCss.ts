import { css, CSSProperties } from 'styled-components/macro'

import isArr from '../array/isArr'
import StyledCss from './_common/StyledCss.type'

type R = CSSProperties['flex']
/**
 * @category styledComponents
 * @module mapColumnsFlexCss
 */
const mapColumnsFlexCss = <T> (columnsFlex: R[] | R): StyledCss<T> => (
  isArr(columnsFlex) ? columnsFlex : [columnsFlex]
).map((flex, index) => css`
  & > *:nth-child(${index + 1}) {
    flex: ${flex};
  }
`)

export default mapColumnsFlexCss