
const getCurrentPage = (dataLength: number, pageSize: number): number => {
  return Math.ceil(dataLength / pageSize)
}

export default getCurrentPage
