import { CSSProperties } from 'react'

const fadeOut = (
  el: HTMLElement,
  duration: number = 300, // In ms
  timingFunction: CSSProperties['transitionTimingFunction'] = 'ease-in-out',
  callback?: () => void,
) => {
  if (!el) return

  el.style.transition = `opacity ${duration}ms ${timingFunction}`
  el.style.opacity = '0'

  setTimeout(() => {
    callback && callback()

    el.style.transition = ''
  }, duration - 10)
}

export default fadeOut