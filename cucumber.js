const options = [
  "--require-module ts-node/register",
  "--require tests/steps/**/*.ts",
  "--format progress",
].join(" ")

const features = ["tests/features/", options].join(" ")

module.exports = {
  default: features,
}
