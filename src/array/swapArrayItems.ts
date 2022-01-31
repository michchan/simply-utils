/**
 * @category array
 * @module swapArrayItems
 */
export function swapArrayItems <T = unknown> (arr: T[], indexA: number, indexB: number): T[] {
  const newArr = [...arr]

  const itemA = newArr[indexA]
  newArr[indexA] = newArr[indexB]
  newArr[indexB] = itemA

  return newArr
}

export default swapArrayItems