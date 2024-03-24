const options = [
  "--require-module ts-node/register",
  "--require tests/steps/**/*.ts",
  "--format progress",
  "--format json:Reports/cucumber_report.json",
].join(" ")

const features = ["tests/features/", options].join(" ")

module.exports = {
  default: features,
}
