import { SyntheticEvent } from 'react'

/**
 * Prevent parent event by stopping propagation from child event listener
 * @param e
 */
const preventEventPropagateToParent = (e: SyntheticEvent | Event): void => {
  e.preventDefault()
  e.stopPropagation()
}

export default preventEventPropagateToParent