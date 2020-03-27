import setTimeoutRecursive from './setTimeoutRecursive'


/**
 * Try some synchronous execution until it is successful time by time. e.g. Calling React ref instance method.
 * 
 * @param eachTry Each try callback. Return a boolean to indicate whether it is successful or not.
 * @param tryTime The number of time to try
 * @param interval The interval between each try
 */
function tryUntil (
    eachTry: (repeated: number, totalTry: number) => boolean,
    tryTime: number,
    interval: number = 100
) {
    // Create aborter buffer
    let abort: (() => void) | undefined
    // Create each try function
    const getEachTryFunc = (index: number, length: number) => () => {
        const result = eachTry(index, length)
        if (result) {
            // Abort call stack
            if (abort) abort()
        }
    }
    // Create callstack
    const callStack = Array(tryTime).fill(null).map((v, i, arr) => getEachTryFunc(i, arr.length))
    // Try several times since inserting is a heavy action
    setTimeoutRecursive(callStack, interval, (aborter) => { abort = aborter })
}

export default tryUntil