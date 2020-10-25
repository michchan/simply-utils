import trim from 'lodash/trim'

export interface FormatAsGroupedStringOptions {
  value: string;
  groupSize: number;
  maxNumGroup: number;
  separator: string;
  /** Default to 0 */
  startIndex?: number;
}

const formatAsGroupedString = ({
  value,
  groupSize,
  maxNumGroup,
  separator,
  startIndex = 0,
}: FormatAsGroupedStringOptions): string => {
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