const setTimeoutRecursive = (
    callStack: (() => void)[] = [],
    interval: number = 150
) => {
    const recur = (callStackIndex: number) => {
        setTimeout(() => {
            const func = callStack[callStackIndex]
            func()

            if (callStackIndex + 1 < callStack.length)
                recur(callStackIndex + 1)
        }, interval)
    }

    recur(0)
}

export default setTimeoutRecursive