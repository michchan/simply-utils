const splitFirstMatch = (
  str: string,
  separator: string
): string[] => str.split(new RegExp(`${separator}(.+)`)).filter(s => s)

export default splitFirstMatch