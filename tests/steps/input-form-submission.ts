import { Given, When, Then } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { page } from "./world"

Given(
  "I navigate to the Input Form Demo page on LambdaTest Selenium Playground",
  async function () {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/input-form-demo"
    )
  }
)

When("I fill out the form with valid data", async function () {
  await page.fill('input[name="name"]', "John Doe")
  await page.fill('input[id="inputEmail4"]', "john.doe@example.com")
  await page.fill('input[name="password"]', "password123")
  await page.fill('input[name="company"]', "Doe Industries")
  await page.fill('input[name="website"]', "https://www.doeindustries.com")

  await page.selectOption('select[name="country"]', { value: "US" })
  await page.fill('input[name="city"]', "New York")
  await page.fill('input[id="inputAddress1"]', "123 Main St")
  await page.fill('input[id="inputAddress2"]', "Apt 101")
  await page.fill('input[id="inputState"]', "NY")
  await page.fill('input[id="inputZip"]', "10001")
})

When("I click the submit button", async function () {
  await page.getByText("Submit").click()
})

Then(
  "I should see a confirmation message saying {string}",
  async function (message) {
    const confirmationMessage = await page.innerText(".success-msg")

    expect(confirmationMessage).toContain(message)
  }
)
