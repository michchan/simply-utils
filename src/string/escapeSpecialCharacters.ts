

/**
 * Escape special characters using regexp.
 * 
 * Reference: https://stackoverflow.com/questions/3115150/how-to-escape-regular-expression-special-characters-using-javascript
 * 
 * @param text The text to escape
 */
function escapeSpecialCharacters(text: string): string  {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export default escapeSpecialCharacters