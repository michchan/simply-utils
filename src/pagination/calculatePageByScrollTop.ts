export interface CalculatePageByScrollTopOptions {
  /** The current start page / page offset. Default to 1. */
  startPage?: number;
  /** The page breaker height. Default to 0 */
  pageBreakerHeight?: number;
}
/**
 * Calculate active page based on scroll top and row size properties.
 * This is useful of list with vertical-scrolled pagination.
 *
 * @param scrollTop
 * @param rowHeight
 * @param pageSize
 * @param options
 *
 * @returns The page number (start from 1)
 * @category pagination
 * @module calculatePageByScrollTop
 */
const calculatePageByScrollTop = (
  /** The current scroll top */
  scrollTop: number,
  /** The height of each row */
  rowHeight: number,
  /** The number of rows on each page */
  pageSize: number,
  {
    startPage = 1,
    pageBreakerHeight = 0,
  }: CalculatePageByScrollTopOptions = {},
): number => {
  // Get toppest-visible row index
  const topRowIndex = Math.ceil(scrollTop / rowHeight)
  // Get number of page breaker(s)
  const numPageBreaker = Math.floor(topRowIndex / pageSize)
  // Recalculate topRowIndex with page breaker
  const normTopRowIndex = Math.ceil((scrollTop - (numPageBreaker * pageBreakerHeight)) / rowHeight)
  // Calculate page by page size
  const calculatedPage = Math.ceil((normTopRowIndex + 1) / pageSize)
  // Calculate relative page
  const page = startPage - 1 + (calculatedPage < 1 ? 1 : calculatedPage)
  // Return page
  return page
}

export default calculatePageByScrollTop