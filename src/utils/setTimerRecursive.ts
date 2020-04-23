
export type ReturnType <RefType extends number | NodeJS.Timeout> = RefType[]

/**
 * Gradually invoking each of the stack of functions with a constant interval
 * 
 * @param callStack The stack of functions to call in sequence.
 * @param interval The constant interval between each invocation.
 * @returns A reference value pointed to the titimmer references stack. It is useful to cancel refs.
 */
function setTimerRecursive <RefType extends number | NodeJS.Timeout> (
    timer: 'timeout' | 'animFrame' = 'timeout',
    callStack: (() => unknown)[] = [],
    interval: number = 150,
    setAborter?: (abort: () => void) => unknown,
): ReturnType<RefType> {
    // The buffer stack to store timmer references
    const refs: RefType[] = []
    // The flag to indicate an abort
    let isAborted: boolean = false

    // Prepare aborter
    const abort = () => { isAborted = true }
    // Set aborter
    if (setAborter) {
        setAborter(abort)
    }

    // Define the recursive function
    const recur = (callStackIndex: number) => {
        const callback = () => {
            // Check abort
            if (isAborted) return
            // Get the next function
            const func = callStack[callStackIndex]
            // Invoke the next function
            if (func) func()
            // Check if it needs to recur
            if (callStackIndex + 1 < callStack.length)
                // Recur next call stack index
                recur(callStackIndex + 1)
        }

        const ref = timer === 'timeout' 
            ? setTimeout(callback, interval) 
            : requestAnimationFrame(callback)

        // Store id to buffer
        refs.push(ref as RefType)
    }

    // Call the recursive function
    recur(0)

    // Return the timer references buffer
    return refs
}

export default setTimerRecursive