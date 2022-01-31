const SPECIAL_CHARS_LIST = [
  '`',
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '+',
  '=',
  '[',
  '{',
  ']',
  '}',
  '|',
  '\\',
  '\'',
  '<',
  ',',
  '.',
  '>',
  '?',
  '/',
  '"',
  ';',
  ':',
  '\\s',
]
/**
 * @category validators
 * @module getSpecialCharsRegex
 */
const getSpecialCharsRegex = (
  excluded: string[] = [],
  // RegExp flags
  flags?: RegExp['flags'],
): RegExp => new RegExp((
  SPECIAL_CHARS_LIST
    .filter(s => !excluded.includes(s))
    // Replace redundant slash characters
    .map(s => /^\\/.test(s) ? s : `\\${s}`)
    .join('|')
), flags)

export default getSpecialCharsRegex