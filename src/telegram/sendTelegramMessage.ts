import fetch from '../_common/fetchPolyfill'

const API_BOT_API_KEY = '{{BOT_API_KEY}}'
const API_CHAT_ID = '{{CHAT_ID}}'
const API_TEXT = '{{TEXT}}'
const API_PARSE_MODE = '{{PARSE_MODE}}'
const API_URL_TEMPLATE = `https://api.telegram.org/bot${API_BOT_API_KEY}/sendMessage?chat_id=${API_CHAT_ID}&text=${API_TEXT}&parse_mode=${API_PARSE_MODE}`

// Max character in a telegram message
export const MAX_MSG_LENGTH = 4096

/**
 * Check the API documentation on telegram.org for more information.
 * @param chatId
 * @param apiKey
 * @param text
 * @param parseMode
 */
const sendTelegramMessage = async (
  chatId: string,
  apiKey: string,
  text: string,
  parseMode: string = 'Markdown',
  // @TODO: Specify telegram response type
): Promise<any> => {
  if (text.length > MAX_MSG_LENGTH)
    throw new Error(`sendTelegramMessage: Maximum message length of ${MAX_MSG_LENGTH} is allowed.`)

  // Create api uri
  const url = API_URL_TEMPLATE
    .replace(API_BOT_API_KEY, apiKey)
    .replace(API_CHAT_ID, chatId)
    .replace(API_TEXT, encodeURIComponent(text))
    .replace(API_PARSE_MODE, parseMode)

  const res = await fetch(url)
  return res.json()
}

export default sendTelegramMessage