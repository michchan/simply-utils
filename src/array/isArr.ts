// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isArr <T extends unknown[] = unknown[]> (value: any): value is T {
  return Array.isArray(value)
}

export default isArr