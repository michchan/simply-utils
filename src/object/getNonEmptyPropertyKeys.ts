import isEmpty from 'lodash/isEmpty'

function getNonEmptyPropertyKeys <T = object> (object: T): string[] {
  return Object
    .entries(object)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([key, value]: [string, unknown]) => !isEmpty(value))
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map(([key, value]: [string, unknown]) => key)
}

export default getNonEmptyPropertyKeys