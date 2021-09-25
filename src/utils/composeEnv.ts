import pick from 'lodash/pick'

// Config dot env
require('dotenv').config()

export type EnvValues <K extends string> = {
  [key in K]: string;
}

export interface ComposeEnvReturnType <K extends string> {
  keys: readonly K[];
  values: EnvValues<K>;
}

/**
 * Environment variables (dotenv) composer with empty check
 * @category utils
 * @module composeEnv
 * @category utils
 * @module composeEnv
 */
const composeEnv = <K extends string> (keys: readonly K[]): ComposeEnvReturnType<K> => {
  const values = pick(process.env, keys) as unknown as EnvValues<K>
  /**
   * Throw an error if any of the environment variables is not defined
   */
  (() => {
    const missingKeys: K[] = []
    for (const key of keys) {
      const value = values[key]
      if (value === undefined) missingKeys.push(key)
    }
    if (missingKeys.length > 0)
      throw new Error(`Value(s) undefined but required in environment: ${missingKeys.join(', ')}`)
  })()

  return {
    keys,
    values,
  }
}
export default composeEnv