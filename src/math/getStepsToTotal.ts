/**
 * Get an array of number,
 * which is the total number divided by a step number.
 *
 * @param total
 * @param step
 * @category math
 * @module getStepsToTotal
 */
const getStepsToTotal = (total: number, step: number): number[] => {
  const numSteps = Math.floor(total / step) + (total % step ? 1 : 0)

  const steps = Array(numSteps).fill(0)
    .map((v, index: number) => index * step, [])

  return steps
}

export default getStepsToTotal