/**
 * Get CSS selector string from a class name or class names separated by spaces.
 * .e.g. 'container squared' -> '.container.squared'
 *
 * @param className
 * @category style
 * @module classNameToSelector
 */
const classNameToSelector = (className: string): string => `.${className.trim().replace(/\s+/g, '.')}`

export default classNameToSelector