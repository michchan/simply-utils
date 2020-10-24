export function isArr <T extends unknown[] = unknown[]> (value: unknown): value is T {
  return Array.isArray(value)
}

export default isArr