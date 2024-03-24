import { After, Before, setDefaultTimeout } from "@cucumber/cucumber"
import { Browser, Page, chromium } from "@playwright/test"

let page: Page
let browser: Browser

setDefaultTimeout(60000)

Before(async () => {
  browser = await chromium.launch()
  page = await browser.newPage()
})

After(async () => {
  await browser.close()
})

export { page, browser }
