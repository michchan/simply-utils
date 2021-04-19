import nodeFetch from 'node-fetch'

const fetchPolyfill = typeof window === 'undefined' ? nodeFetch : fetch
export default fetchPolyfill