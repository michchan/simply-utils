function forEach<T extends { [key: string]: any } = { [key: string]: any }> (
  obj: T,
  callback: (
    // [key, value] pair
    entry: [keyof T, T[keyof T]],
    index: number,
    entries: [keyof T, T[keyof T]][],
  ) => unknown = () => null,
): void {
  Object.entries(obj).forEach(callback)
}

export default forEach