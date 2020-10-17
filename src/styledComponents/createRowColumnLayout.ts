import type { CSSProperties } from "react"
import styled, { css } from 'styled-components'

import isNumOrStr from "../validators/isNumOrStr"
import isNum from "../number/isNum"



export interface RowsContainer {
  extraCss?: string;
}
export interface RowProps {
  extraCss?: string;
}
interface FlexConfig {
  flex: CSSProperties['flex'];
  maxWidth?: CSSProperties['maxWidth']; // bound the width of flexbox because sometimes the width may exceed the given flex-basis
}
export interface ColumnProps {
  // original flex and maxWidth (when screen is larger than breakpoint and any of breakpoints)
  flex?: CSSProperties['flex'];
  // Default to 'column'
  flexDirection?: CSSProperties['flexDirection'];
  maxWidth?: CSSProperties['maxWidth']; // bound the width of flexbox because sometimes the width may exceed the given flex-basis

  // flex and maxWidth changes if screen smaller than `breakpoint` or `breakpoints`
  // if both `breakpoints` and `breakpoint` specified, same effect as putting the `breakpoint` config into `breakpoints`
  breakpoints?: { [breakpoint in number | string]: CSSProperties['flex'] | FlexConfig }; // { [breakpoint]: flex | FlexConfig }  when screen width smaller than breakpoint (the key in `breakpoints`), flex specified (may not be 100%) will be used for that Column
  breakpoint?: number; // same as `breakpoints`: { [breakpoint]: { flex: "0 0 100%", maxWidth: "100%" } }

  extraCss?: string;
}

/**
 * 
 * Return components for rendering flexbox when specified margin. Flexbox wrap when reach specified breakpoint(s)
 * All Columns have same margin between other Columns got by the same createRowColumnLayout(margin)
 * <RowsContainer/>: wrap Rows. To ensure Rows are wrapped by block
 * <Row/>: wrap Column. Auto wrap Columns if they exceed the width.
 * <Column/>: flexbox
 * 
 * @author Sandy Lau https://github.com/sandylau333
 * 
 * @param paddingHoriz 
 * @param paddingVerti 
 */
function createRowColumnLayout(
  paddingHoriz: number = 30, 
  paddingVerti: number = 20,
) {
  const halfPaddingHoriz = paddingHoriz / 2
  const halfPaddingVerti = paddingVerti / 2

  /** --------------------- Create Rows Container --------------------- */

  // Css of RowsContainer
  const rowsContainerCss = css`
     width: 100%;

    ${({ extraCss }: RowsContainer) => extraCss}
  `
  // RowsContainer
  const RowsContainer = styled.div`
    ${rowsContainerCss}
  `

  /** --------------------- Create Row --------------------- */

  // Css of Row
  const rowCss = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -${halfPaddingHoriz}px;
    margin-right: -${halfPaddingHoriz}px;

    /* Cancel out extra vertical padding */
    &:first-child {
      margin-top: -${halfPaddingVerti}px;
    }
    /* Fix weird issue for SectionCardBodyDiv display block */
    /* &:last-child {
      margin-bottom: -${halfPaddingVerti}px;
    } */

    ${({ extraCss }: RowProps) => extraCss}
  `
  // Row
  const Row = styled.div`
    ${rowCss}
  `
  Row.displayName = "Row"

  /** --------------------- Create Column --------------------- */

  // Css of Column
  const columnCss = css`
    display: flex;
    flex-direction: ${({ flexDirection = 'column' }: ColumnProps) => flexDirection};
    flex: ${({ flex = "1" }: ColumnProps) => flex};
    max-width: ${({ maxWidth = "100%" }: ColumnProps) => isNum(maxWidth)? `${maxWidth}px` : maxWidth};
    padding: ${halfPaddingVerti}px ${halfPaddingHoriz}px;
    box-sizing: border-box;

    ${({ breakpoint }: ColumnProps) => (breakpoint ? css`
      @media (max-width: ${ breakpoint }px) {        
        flex-basis: 100%;
        max-width: 100%
      }
    ` : '')}

    ${({ breakpoints = {} }: ColumnProps) => 
      Object.keys(breakpoints)
        .map(bp => parseFloat(bp))
        .sort((bp1, bp2) => bp2 - bp1)
        .map((bpNumber, index, array) => {
          const bp = breakpoints[bpNumber.toString()]
          if (!bp) return ''
          return css`
            @media (max-width: ${bpNumber}px) and (min-width: ${array[index + 1] || 0}px) {
              flex: ${
                isNumOrStr(bp)
                  ? bp 
                  : bp.flex
              };
              max-width: ${
                !isNumOrStr(bp) 
                && bp.maxWidth !== undefined 
                  ? bp.maxWidth 
                  : "100%"
              }
            }
          `
        })
    }

    ${({ extraCss }: ColumnProps) => extraCss}
  `
  // Column
  const Column = styled.div<ColumnProps>`
    ${columnCss}
  `
  Column.displayName = "Column"


  return {
    rowsContainerCss,
    RowsContainer,
    rowCss,
    Row,
    columnCss,
    Column,
  }
}

export default createRowColumnLayout
