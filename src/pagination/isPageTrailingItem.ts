

/**
 * Get whether it is the last item of the page
 * 
 * @param rowIndex 
 * @param pageSize 
 */
const isPageTrailingItem = (rowIndex: number, pageSize: number): boolean => (rowIndex + 1) % pageSize === 0

export default isPageTrailingItem