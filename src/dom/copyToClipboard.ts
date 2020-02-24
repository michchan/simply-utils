/**
 * Reference: https://gist.github.com/Chalarangelo/4ff1e8c0ec03d9294628efbae49216db#file-copytoclipboard-js
 * 
 * @param {string} str text to copy
 */
const copyToClipboard = (str: string) => {
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = str;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';                 
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);
    const selection = document.getSelection()                  // Append the <textarea> element to the HTML document
    const selected =       
        (selection?.rangeCount || 0) > 0        // Check if there is content selected previously
            ? document.getSelection()?.getRangeAt(0)     // Store selection if found
            : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
        selection?.removeAllRanges();    // Unselect everything on the HTML document
        selection?.addRange(selected);   // Restore the original selection
    }
};

export default copyToClipboard