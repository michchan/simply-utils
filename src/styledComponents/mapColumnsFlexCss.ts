import { css, CSSProperties } from "styled-components"

import isArr from "../array/isArr"


type R = CSSProperties['flex']

const mapColumnsFlexCss = (columnsFlex: R[] | R) => (
  isArr(columnsFlex) ? columnsFlex : [columnsFlex]
).map((flex, index) => {
  return css`
    & > *:nth-child(${index + 1}) {
      flex: ${flex};
    }   
  `
})

export default mapColumnsFlexCss
