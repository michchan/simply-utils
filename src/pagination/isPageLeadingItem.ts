/**
 * Get whether it is the first item of the page
 *
 * @param rowIndex
 * @param pageSize
 */
const isPageLeadingItem = (rowIndex: number, pageSize: number): boolean => rowIndex % pageSize === 0

export default isPageLeadingItem