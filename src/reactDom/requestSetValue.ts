import { Dispatch, SetStateAction } from "react"

import isFunc from "../validators/isFunc"



/**
 * Set state function which called "setValue" of useState of React,
 * but it goes through a "canUpdate" function before the state is actually set.
 * The "canUpdate" function can determine whether the next state should be set. 
 * 
 * Example use case: There are multiple forms, while only one form can be open each time
 * 
 * @param nextValue The next value to be set, e.g. "isOpen" state.
 * @param setValue The React state setter for setting the "nextValue", .e.g. "setIsOpen".
 * @param canUpdate The function which receives the "nextValue", to return a boolean indicating whether the update is allowed.
 */
function requestSetValue <T> (
  nextValue: SetStateAction<T>,
  setValue: Dispatch<SetStateAction<T>>, 
  canUpdate: (nextValue: T) => boolean,
): void {
  // Handle if nextValue is a function
  if (isFunc(nextValue)) {
    // Handle if nextValue is a value
    return setValue(prevValue => {
      const next = nextValue(prevValue)

      // Request to update
      if (canUpdate(next)) {
        return next
      }
      // Return previous value if an update is not allowed
      return prevValue
    })
  } 


  // Request to update
  if (canUpdate(nextValue)) {
    return setValue(nextValue)
  }
}

export default requestSetValue
