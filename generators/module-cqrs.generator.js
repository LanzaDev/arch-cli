const path = require("path");

const createFolders =
  require("../utils/create-folders");

const createFiles =
  require("../utils/create-files");


const profile =
  require("../profiles/cqrs.profile");

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

  createFiles(modulePath);
}

module.exports = generate;