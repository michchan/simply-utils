/**
 * Add 'http'/'https' prefix to url
 * @category network
 * @module normalizeUrl
 */
const normalizeUrl = (src: string): string => {
  if (!/^(http|https)\:\/\//i.test(src))
    return `https://${src}`

  return src
}

export default normalizeUrl