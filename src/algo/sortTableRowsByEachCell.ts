import getArraySortNumber from '../array/getArraySortNumber'

export interface TableCellSortState {
  index: number;
  isDescending: boolean;
}

/**
 * Sort table rows data with a "sort state" array
 * @category algo
 * @module sortTableRowsByEachCell
 * @category algo
 * @module sortTableRowsByEachCell
 */
function sortTableRowsByEachCell <T> (
  rows: T[],
  sortState: TableCellSortState[],
  comparator?: (a: T, b: T, cellIndex: number) => number,
): T[] {
  const reversedSortState = [...sortState].reverse()
  return reversedSortState.reduce((sortedRow, cellSortState) => {
    const { index, isDescending } = cellSortState
    return sortedRow.sort((a, b) => {
      const sortNum = comparator
        ? comparator(a, b, index)
        : getArraySortNumber(a, b)
      return sortNum * (isDescending ? -1 : 1)
    })
  }, [...rows])
}

export default sortTableRowsByEachCell