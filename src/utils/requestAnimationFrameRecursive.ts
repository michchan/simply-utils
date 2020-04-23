import setTimerRecursive from "./setTimerRecursive"

export type ReturnType = number[]

/**
 * Gradually invoking each of the stack of functions with a constant interval
 * 
 * @param callStack The stack of functions to call in sequence.
 * @param interval The constant interval between each invocation.
 * @returns A reference value pointed to the titimmer references stack. It is useful to cancel timers.
 */
const requestAnimationFrameRecursive = (
    callStack: (() => unknown)[] = [],
    setAborter?: (abort: () => void) => unknown,
): ReturnType => {
    return setTimerRecursive<number>('animFrame', callStack, undefined, setAborter)
}

export default requestAnimationFrameRecursive