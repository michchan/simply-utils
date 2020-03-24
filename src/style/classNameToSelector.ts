/**
 * Get CSS selector string from a class name or class names separated by spaces.
 * .e.g. 'container squared' -> '.container.squared'
 * 
 * @param className 
 */
const classNameToSelector = (className: string) => `.${className.trim().replace(/\s+/g, '.')}`

export default classNameToSelector