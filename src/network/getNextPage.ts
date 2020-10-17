
const getNextPage = (dataLength: number, pageSize: number): number => {
  return Math.floor(dataLength / pageSize) + 1
}

export default getNextPage
