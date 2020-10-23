function forEach<T extends object = object> (
  obj: T,
  callback: (
    entry: [keyof T, T[keyof T]], // [key, value] pair
    index: number,
    entries: [keyof T, T[keyof T]][],
  ) => unknown = () => {},
) {
  // @ts-ignore: @TODO: fix type ts(2345)
  Object.entries(obj).forEach(callback)
}

export default forEach