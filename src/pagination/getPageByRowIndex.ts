/**
 * Get the page number by row index
 *
 * @param rowIndex
 * @param pageSize
 * @category pagination
 * @module getPageByRowIndex
 * @category pagination
 * @module getPageByRowIndex
 */
const getPageByRowIndex = (
  rowIndex: number,
  pageSize: number
): number => Math.ceil((rowIndex + 1) / pageSize)

export default getPageByRowIndex