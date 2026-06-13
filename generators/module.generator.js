const path = require("path");

const createFolders =
  require("../utils/create-folders");

const profile =
  require("../profiles/default.profile");

function generate(moduleName) {

  const modulePath = path.join(
    process.cwd(),
    "src",
    "modules",
    moduleName
  );

  createFolders(
    modulePath,
    profile
  );
}

module.exports = generate;