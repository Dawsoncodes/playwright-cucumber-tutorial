const reporter = require("cucumber-html-reporter")
const dayjs = require("dayjs")
const fs = require("fs")

const currentDate = dayjs().format("YYYY_MM_DD_HH_mm_ss_SSS")

const options = {
  brandTitle: "Feature Test Report",
  theme: "bootstrap",
  jsonFile: "Reports/cucumber_report.json",
  output: "Reports/cucumber_report_" + currentDate + ".html",
  screenshotsDirectory: "./Screenshots/",
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: true,
}

// Making the directory if it doesn't exist
if (!fs.existsSync("Reports")) {
  fs.mkdirSync("Reports")
}

if (!fs.existsSync("Screenshots")) {
  fs.mkdirSync("Screenshots")
}

reporter.generate(options)
