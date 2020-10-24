// Not using "isNumber" here to avoid wrong import from other utils library
const isNum = (o: unknown, isStringAllowed: boolean = false): o is number => {
  const isNumType = typeof o === 'number'

  if (!isStringAllowed)
    return isNumType

  return isNumType || (typeof o === 'string' && !isNaN(Number(o)) && o.trim() !== '')
}

export default isNum