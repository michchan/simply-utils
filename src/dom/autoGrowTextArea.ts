

/**
 * Auto-grow textarea according to content size
 * Reference: https://stackoverflow.com/questions/17772260/textarea-auto-height
 */
const autoGrowTextArea = (el: HTMLTextAreaElement) => requestAnimationFrame(() => {
    el.style.height = `0px`;
    el.style.height = `${el.scrollHeight + 1}px`;
})

export default autoGrowTextArea