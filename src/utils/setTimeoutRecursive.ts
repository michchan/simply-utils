import setTimerRecursive from './setTimerRecursive'

/**
 * Gradually invoking each of the stack of functions with a constant interval
 *
 * @param callStack The stack of functions to call in sequence.
 * @param interval The constant interval between each invocation.
 * @returns A reference value pointed to the titimmer references stack. It is useful to cancel timers.
 */
const setTimeoutRecursive = (
  callStack: (() => unknown)[] = [],
  interval: number = 150,
  setAborter?: (abort: () => void) => unknown,
): NodeJS.Timeout[] => setTimerRecursive<NodeJS.Timeout>('timeout', callStack, interval, setAborter)

export default setTimeoutRecursive