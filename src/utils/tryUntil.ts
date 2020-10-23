import isFunc from '../validators/isFunc'

/**
 * Try some synchronous execution until it is successful time by time. e.g. Calling React ref instance method.
 *
 * @param eachTry Each try callback. Return a boolean to indicate whether it is successful or not.
 * @param tryTime The number of time to try
 * @param interval The interval between each try
 */
function tryUntil (
  handler: (repeated: number, totalTry: number) => boolean,
  tryTime: number,
  interval: number = 100,
  successCallback?: () => unknown,
  failedCallback?: () => unknown,
) {
  // Create each try function
  const tryEach = (index: number, tryTime: number) => {
    const result = handler(index, tryTime)
    if (result) {
      // Invoke success callback
      isFunc(successCallback) && successCallback()
    } else if (index + 1 === tryTime) {
      // Invoke failed callback
      isFunc(failedCallback) && failedCallback()
    } else {
      // Invoke next try
      setTimeout(() => tryEach(index + 1, tryTime), interval)
    }
  }

  // Invoke recursive function
  tryEach(0, tryTime)
}

export default tryUntil