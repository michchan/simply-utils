
const isNoAdditonalDataFetched = (
  isRefetchingPrevPage: boolean,
  localDataLength: number,
  fetchedDataLength: number,
  pageSize: number,
): boolean => {
  return (
    isRefetchingPrevPage
      // If it is a current page re-fetch, check if the fetched data length equals 
      // the size of the last page of the local data
      ? fetchedDataLength === localDataLength % pageSize
      // If it fetched next page, check if there are additional data fetched
      : fetchedDataLength === 0
  )
}

export default isNoAdditonalDataFetched
