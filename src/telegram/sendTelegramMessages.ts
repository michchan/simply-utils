import parseLinesToChunks from '../string/parseLinesToChunks'
import sendTelegramMessage, { MAX_MSG_LENGTH } from './sendTelegramMessage'
import callPromiseWithDelay from '../async/callPromiseWithDelay'

export const DEFAULT_INTERVAL = 5000

export interface SendTelegramMessagesOptions {
  /** Default to 'Markdown' */
  parseMode?: string;
  /** Default to DEFAULT_INTERVAL */
  interval?: number;
/**
 * @category telegram
 * @module sendTelegramMessages
 */
const sendTelegramMessages = async (
  lines: string[],
  chatId: string,
  apiKey: string,
  {
    parseMode = 'Markdown',
    interval = DEFAULT_INTERVAL,
  }: SendTelegramMessagesOptions = {},
): Promise<void> => {
  const messages = parseLinesToChunks(lines, MAX_MSG_LENGTH)
  // Send each chunk of messages
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i]
    await sendTelegramMessage(chatId, apiKey, msg, parseMode)

    if (i < messages.length)
      // Delay to make sure the previous message has been sent and displayed to all user
      await callPromiseWithDelay(() => Promise.resolve(), interval)
  }
}

export default sendTelegramMessages