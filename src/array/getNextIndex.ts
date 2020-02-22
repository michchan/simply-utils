

export type Direction = 'backward' | 'forward'

/**
 * Get the next item index of the array
 * It handles with the length of the array so that the index won't overflow.
 */
export function getNextIndex (
    prevIndex: null | number,
    totalLength: number,
    direction: Direction = 'forward',
): number {
    const isForward = direction === 'forward'
    const lastIndex = totalLength - 1
    const nextIndex = (
        prevIndex === null
            ? isForward ? 0 : lastIndex
            : (
                // Determin if the move is within the bound
                isForward 
                    ? (prevIndex + 1 <= lastIndex)
                    : (prevIndex > 0)
            ) 
                ? prevIndex + (isForward? 1 : -1)
                : isForward ? 0 : lastIndex
    )
    return nextIndex
} 

export default getNextIndex