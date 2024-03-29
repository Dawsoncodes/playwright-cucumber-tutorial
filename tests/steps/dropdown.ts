import { Given, Then, When } from "@cucumber/cucumber"
import { page } from "./world"
import { expect } from "@playwright/test"

Given("I am on the Select Dropdown Demo page", async function () {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  )
})

When("I select {string} from the dropdown", async function (string) {
  await page.selectOption("select#select-demo", { label: string })
})

Then("{string} should be shown as the selected day", async function (string) {
  const p = await page.innerText("p.selected-value")

  expect(p).toBe(`Day selected :- ${string}`)
})

When("I select {string} from the select option", async function (string) {
  await page.click(`select#multi-select option:has-text("${string}")`)
})

When("I click on the {string} button", async function (string) {
  await page.click(`button:has-text("${string}")`)
})

Then(
  "{string} should be shown as the first selected option",
  async function (string) {
    const text = await page.innerText("span.genderbutton")

    expect(text).toBe(string)
  }
)

Then(
  "{string} should be shown as the last selected option",
  async function (string) {
    const text = await page.innerText("span.groupradiobutton")

    expect(text).toBe(string)
  }
)
