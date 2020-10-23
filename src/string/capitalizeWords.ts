/**
 * Reference: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-50.php
 *
 * @param {string} str
 * @returns {string}
 */
const capitalizeWords = (str: string): string => {
  const words: string[] = str.split(' ').filter(s => s)

  const capitalizedWords = words.map((word: string) => `${(word[0] || '').toUpperCase()}${word.substr(1)}`)

  return capitalizedWords.join(' ')
}

export default capitalizeWords