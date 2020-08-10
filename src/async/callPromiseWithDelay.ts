
/**
 * Call a promise callee with delay
 * 
 * @param delay The number of delay
 * @param callee The callee function
 */
function callPromiseWithDelay <T = unknown> (
    delay: number,
    callee: () => Promise<T>
) {
    return new Promise((resolve) => {
        setTimeout(async () => {
            const res = await callee()
            resolve(res)
        }, delay)
    })
}

export default callPromiseWithDelay