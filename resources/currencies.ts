
const list = [
    'hkd',
    'usd',
    'gbp',
    'eur'
] as const

export type Currency = typeof list[number]

const DEFAULT: Currency = "hkd"

const currencies = {
    DEFAULT,
    list,
}

export default currencies