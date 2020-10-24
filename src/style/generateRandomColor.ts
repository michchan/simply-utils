const RADIX = 16
const BASE_COLOR = 0xFFFFFF

// @TODO: fix this error
// eslint-disable-next-line no-bitwise
const generateRandomColor = (): string => `#${(Math.random() * BASE_COLOR << 0).toString(RADIX)}`

export default generateRandomColor