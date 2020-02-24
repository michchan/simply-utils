import isNum from "../number/isNum"


export type Breakpoint =number | "100%" | ""

/**
 * Check if the given windowWidth is smaller than the breakpoint
 * @param windowWidth usually use with hook `useWindowSize`
 * @param breakpoint (optional) can be number, "100%" or "". Default ""
 * If "100%", always return true, is smaller than breakpoint
 * If "", check with param `min`
 * @param min (optional) minimum breakpoint. Default 0
 * Use if want to ensure return true if smaller than `min` no matter what `breakpoint` is
 * If both `breakpoint` and `min` are not provided, will return false
 */
const isSmallerThanBreakpoint = (windowWidth: number, breakpoint: Breakpoint = '', min: number = 0): boolean => {

    // always return true if breakpoint is "100%"
    if (breakpoint === "100%") {
        return true
    }

    // convert breakpoint into px or use fallback
    const breakpointPx = (() => {
        const breakpointString = breakpoint.toString()
        // if can be parse to number
        if (isNum(breakpointString, true)) {
            return parseFloat(breakpointString)
        }
        else {
            return min
        }
    })()

    // limit breakpoint
    const limitedBreakpointPx = Math.max(min, breakpointPx)

    return windowWidth < limitedBreakpointPx
}

export default isSmallerThanBreakpoint