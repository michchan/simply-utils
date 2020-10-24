const compareString = (a: string, b: string, isDesc: boolean = false): number => {
  if (a < b) return isDesc ? 1 : -1
  if (a > b) return isDesc ? -1 : 1
  return 0
}

export default compareString