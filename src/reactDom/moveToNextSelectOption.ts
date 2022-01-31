import { MutableRefObject } from 'react'
import getNextIndex, { GetNextIndexDirection } from '../array/getNextIndex'
import isFunc from '../validators/isFunc'
export type MoveToNextSelectOptionDirection = GetNextIndexDirection
export interface MoveToNextSelectOptionOptions {
  direction: GetNextIndexDirection;
  prevIndex: null | number;
  totalLength: number;
  nodeRefs: MutableRefObject<(null | HTMLElement)[]>;
  listScrollableRef: MutableRefObject<null | HTMLDivElement>;
}
/**
 * Scroll to the next select option
 * @category reactDom
 * @module moveToNextSelectOption
 */
const moveToNextSelectOption = ({
  direction,
  prevIndex,
  totalLength,
  nodeRefs,
  listScrollableRef,
}: MoveToNextSelectOptionOptions): number => {
  const nextIndex = getNextIndex(prevIndex, totalLength, direction)

  const foundOptionNode: HTMLElement | null = nodeRefs.current[nextIndex]

  if (
    foundOptionNode
    && listScrollableRef.current
    && isFunc(listScrollableRef.current.scrollTo)
  )
    listScrollableRef.current.scrollTo({ top: foundOptionNode.offsetTop })

  return nextIndex
}

export default moveToNextSelectOption