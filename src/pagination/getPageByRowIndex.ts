/**
 * Get the page number by row index
 *
 * @param rowIndex
 * @param pageSize
 */
const getPageByRowIndex = (rowIndex: number, pageSize: number): number => Math.ceil((rowIndex + 1) / pageSize)

export default getPageByRowIndex