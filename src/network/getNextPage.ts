/**
 * @category network
 * @module getNextPage
 */
const getNextPage = (
  dataLength: number,
  pageSize: number
): number => Math.floor(dataLength / pageSize) + 1

export default getNextPage