import { CSSProperties } from 'react'

const DURATION_BUFFER = 10
/**
 * @category reactDom
 * @module fadeOut
 */
const fadeOut = (
  el: HTMLElement,
  // In ms
  duration: number = 300,
  timingFunction: CSSProperties['transitionTimingFunction'] = 'ease-in-out',
  callback?: () => void,
): void => {
  if (!el) return

  el.style.transition = `opacity ${duration}ms ${timingFunction}`
  el.style.opacity = '0'

  setTimeout(() => {
    callback && callback()

    el.style.transition = ''
  }, duration - DURATION_BUFFER)
}

export default fadeOut