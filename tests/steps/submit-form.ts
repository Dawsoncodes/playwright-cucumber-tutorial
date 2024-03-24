import { Given, When, Then } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { page } from "./world"

Given("the user is on the form page", async function () {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  )
})

When(
  "the user enters {string} into the message field",
  async function (message: string) {
    await page.fill("#user-message", message)
  }
)

When("the user clicks the submit button", async function () {
  await page.click("#showInput")
})

Then(
  "the message {string} should be displayed on the page",
  async function (message: string) {
    const text = await page.innerText("#message")
    expect(text).toBe(message)
  }
)
