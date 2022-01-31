import isEmpty from 'lodash/isEmpty'
/**
 * @category object
 * @module getNonEmptyPropertyKeys
 */
function getNonEmptyPropertyKeys <T = { [key: string]: any }> (object: T): string[] {
  return Object
    .entries(object)
    .filter((entry: [string, unknown]) => !isEmpty(entry[1]))
    .map(([key]: [string, unknown]) => key)
}

export default getNonEmptyPropertyKeys