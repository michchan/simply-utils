/**
 * Reference: https://gist.github.com/Chalarangelo/4ff1e8c0ec03d9294628efbae49216db#file-copytoclipboard-js
 *
 * @param {string} str text to copy
 * @category dom
 * @module copyToClipboard
 */
const copyToClipboard = (str: string): void => {
  // Create a <textarea> element
  const el = document.createElement('textarea')
  // Set its value to the string that you want copied
  el.value = str
  // Make it readonly to be tamper-proof
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  // Move outside the screen to make it invisible
  el.style.left = '-9999px'
  document.body.appendChild(el)
  // Append the <textarea> element to the HTML document
  const selection = document.getSelection()
  // Check if there is content selected previously
  const selected = (selection?.rangeCount || 0) > 0
    // Store selection if found
    ? document.getSelection()?.getRangeAt(0)
    // Mark as false to know no selection existed before
    : false
  // Select the <textarea> content
  el.select()
  // Copy - only works as a result of a user action (e.g. click events)
  document.execCommand('copy')
  // Remove the <textarea> element
  document.body.removeChild(el)
  // If a selection existed before copying
  if (selected) {
    // Unselect everything on the HTML document
    selection?.removeAllRanges()
    // Restore the original selection
    selection?.addRange(selected)
  }
}

export default copyToClipboard