import wait from './wait'
/**
 * Execute async task with auto-retry
 *
 * @param task The async task function
 * @param time The nth number of time for this attempt.
 *             Stop retrying if it is equal to ZERO. Default to 3.
 * @param delay The milliseconds of delay before each retry, default to 0.
 * @category async
 * @module retry
 */
export async function retry <T = unknown> (
  task: (time: number) => Promise<T>,
  time: number = 3,
  delay: number = 0,
): Promise<T> {
  try {
    return task(time)
  } catch (err) {
    if (time <= 0) throw err

    await wait(delay)
    return retry(task, time - 1)
  }
}

export default retry