import { config } from "dotenv"
config()
import { After, Before, setDefaultTimeout } from "@cucumber/cucumber"
import { Browser, Page, chromium } from "@playwright/test"

let page: Page
let browser: Browser

setDefaultTimeout(60000)

Before(async ({ pickle }) => {
  const capabilities = {
    browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest",
    "LT:Options": {
      platform: "Windows 10",
      build: "Playwright Cucumber Tutorial",
      name: pickle.name,
      user: process.env.LT_USERNAME,
      accessKey: process.env.LT_ACCESS_KEY,
      network: true,
      video: true,
      console: true,
    },
  }

  browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      JSON.stringify(capabilities)
    )}`,
  })

  page = await browser.newPage()
})

After(async function (scenario) {
  if (scenario.result?.status === "FAILED") {
    const screenshot = await page.screenshot({
      path: `./Screenshots/${scenario.pickle.name}.png`,
    })

    this.attach(screenshot, "image/png")
  }

  await browser.close()
})

export { page, browser }
