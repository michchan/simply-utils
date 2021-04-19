/**
 * Helper to get environment variables with error throwing logic
 * @param name Name/key of the environment variable
 * @param isMandatory Whether it should throw an error if it's not defined.
 */
const getEnvVars = (
  name: string,
  isMandatory: boolean = true
): string => {
  const value = process.env[name]
  if (isMandatory && value === undefined)
    throw new Error(`${name} is required in environment but got undefined.`)
  return value as string
}

export default getEnvVars