// Not using "isNumber" here to avoid wrong import from other utils library
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isNum = (o: any, stringAllowed: boolean = false): o is number => {
  const isNumType = typeof o === 'number'

  if (!stringAllowed)
    return isNumType

  return isNumType || (typeof o === 'string' && !isNaN(Number(o)) && o.trim() !== '')
}

export default isNum