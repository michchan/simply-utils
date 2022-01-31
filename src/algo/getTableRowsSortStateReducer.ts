import { TableCellSortState } from './sortTableRowsByEachCell'
/**
 * Get next "TableCellSortState" to achieve the following behaviors:
 *  1. When the cell was not sorted
 *      --> sort it according to default ordering (ascending/descending)
 *  2. When the cell was sorted as default ordering
 *      --> set as the opposite ordering (ascending/descending)
 *  3. When the cell was sorted but NOT as default ordering
 *      --> clear sort state
 *
 * @returns a reducer function that accept a previous/current state and return next state.
 * @category algo
 * @module getTableRowsSortStateReducer
 */
const getTableRowsSortStateReducer = (
  cellIndex: number,
  isDefaultToDescending: boolean = false
) => (prev: TableCellSortState[]): TableCellSortState[] => {
  const prevCellState = prev.find(s => s.index === cellIndex)
  // Case: previously not sorted --> append this cell
  if (!prevCellState) {
    return [
      ...prev,
      { index: cellIndex, isDescending: isDefaultToDescending },
    ]
  }
  // Case: previously was not default ordering --> remove this cell
  if (prevCellState.isDescending !== isDefaultToDescending)
    return prev.filter(s => s.index !== cellIndex)
    // Default case: previously was sorted --> change sort ordering
  return prev.map(s => {
    if (s.index === cellIndex) {
      return {
        index: cellIndex,
        isDescending: !s.isDescending,
      }
    }
    return s
  })
}

export default getTableRowsSortStateReducer