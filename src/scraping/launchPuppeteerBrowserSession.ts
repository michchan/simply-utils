import puppeteer = require('puppeteer')
import chromium = require('chrome-aws-lambda')
import 'chrome-aws-lambda/bin/aws.tar.br'
import 'chrome-aws-lambda/bin/chromium.br'
import 'chrome-aws-lambda/bin/swiftshader.tar.br'
// 240s
const DEFAULT_TIMEOUT = 240_000
export type GetDataWithPage <T> = (page: puppeteer.Page) => Promise<T> | T
/**
 * Helpers to scrape data from html with Puppeteer library.
 * It is ready to run on any serverless environment like AWS lambda.
 *
 * @param getBatchData
 * @param defaultTimeout Default to 240000 (ms)
 * @category scraping
 * @module launchPuppeteerBrowserSession
 */
async function launchPuppeteerBrowserSession <T> (
  getBatchData: GetDataWithPage<T>[],
  defaultTimeout: number = DEFAULT_TIMEOUT
): Promise<T[]> {
  let browser: puppeteer.Browser | null = null

  try {
    // Open the headless browser
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    })

    // Open a new page
    const page = await browser.newPage()

    // Set default timeout
    page.setDefaultTimeout(defaultTimeout)

    // Get batches of data
    const data: T[] = []
    for (const getEach of getBatchData)
      data.push(await getEach(page))

    // Run function to get data
    return data
  } finally {
    if (browser) await browser.close()
  }
}
export default launchPuppeteerBrowserSession