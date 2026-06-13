const fs = require("fs");
const path = require("path");

function loadTemplate(profile, templateName) {
  return fs.readFileSync(
    path.join(
      __dirname,
      "..",
      "templates",
      profile,
      templateName
    ),
    "utf8"
  );
}

module.exports = loadTemplate;