/**
 * Execute async task with auto-retry
 * 
 * @param task The async task function
 * @param time The nth number of time for this attempt. Stop retrying if it is equal to ZERO. Default to 3.
 */
export async function retry <T = unknown> (
    task: (time: number) => Promise<T>, 
    time: number = 3,
): Promise<T> {
    try {
        return task(time)
    } catch(err) {
        if (time === 0) throw err;
        return retry(task, time - 1);
    }
};

export default retry