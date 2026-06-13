const ora = require("ora").default;

function startLoading(text) {
  return ora(text).start();
}

module.exports = {
  startLoading
};