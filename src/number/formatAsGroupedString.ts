export interface FormatAsGroupedStringOptions {
  value: string;
  groupSize: number;
  maxNumGroup: number;
  separator: string;
  /** Default to 0 */
  startIndex?: number;
}
/**
 * @category number
 * @module formatAsGroupedString
 */
const formatAsGroupedString = ({
  value,
  groupSize,
  maxNumGroup,
  separator,
  startIndex = 0,
}: FormatAsGroupedStringOptions): string => {
  const regexp = new RegExp(separator, 'g')

  const trimmedValue = value.replace(regexp, '').trim()
  const strGroups = []

  for (let i = startIndex; i < maxNumGroup; i++) {
    const groupStartIndex = i * groupSize
    const groupEndIndex = groupStartIndex + groupSize
    const strGroup = trimmedValue.substring(groupStartIndex, groupEndIndex)
    if (strGroup)
      strGroups.push(strGroup)
  }

  return strGroups.join(separator)
}

export default formatAsGroupedString