/**
 * Execute async task with auto-retry
 * 
 * @param task The async task function
 * @param time The nth number of time for this attempt. Stop retrying if it is equal to ZERO.
 */
export async function retry <T = unknown> (
    task: (time: number) => Promise<T>, 
    time: number = 3,
): Promise<T> {
    try {
        return await task(time)
    } catch(err) {
        if (time === 1) throw err;
        return await retry(task, time - 1);
    }
};

export default retry