import getStepsToTotal from '../math/getStepsToTotal'



const SECONDS_IN_A_DAY = 60 * 60 * 24


/**
 * Get an array of number, 
 * which is the number of seconds in a day divided by a step number.
 * 
 * @param step The step of each intervals
 */
const getTimeStepsInSeconds = (step: number = 60): number[] => {
  return getStepsToTotal(SECONDS_IN_A_DAY, step)
}

export default getTimeStepsInSeconds
