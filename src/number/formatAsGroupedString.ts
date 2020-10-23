import trim from 'lodash/trim'

const formatAsGroupedString = (
  value: string,
  groupSize: number,
  maxNumGroup: number,
  separator: string,
  startIndex: number = 0
): string => {
  const regexp = new RegExp(separator, 'g')

  const trimmedValue = trim(value.replace(regexp, ''))
  const strGroups = []

  for (let i = startIndex; i < maxNumGroup; i++) {
    const strGroup = trimmedValue.substr(i * groupSize, groupSize)
    if (strGroup)
      strGroups.push(strGroup)
  }

  return strGroups.join(separator)
}

export default formatAsGroupedString