/**
 * @category style
 * @module calculateFlexRatio
 */
const calculateFlexRatio = (nums: number[] = []): number[] => {
  if (nums.length === 0) return nums

  const [smallestNum] = [...nums].sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })

  return nums.map((num: number) => num / smallestNum)
}

export default calculateFlexRatio