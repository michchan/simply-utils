/**
 * @category network
 * @module getCurrentPage
 */
const getCurrentPage = (
  dataLength: number,
  pageSize: number
): number => Math.ceil(dataLength / pageSize)

export default getCurrentPage