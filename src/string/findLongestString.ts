const findLongestString = (strs: string[]): string => strs.sort((a: string, b: string) => {
  if (a.length > b.length) return -1
  if (a.length < b.length) return 1
  return 0
})[0]

export default findLongestString