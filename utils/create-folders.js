const fs = require("fs");
const path = require("path");

function createFolders(basePath, folders) {
  folders.forEach(folder => {
    fs.mkdirSync(
      path.join(basePath, folder),
      {
        recursive: true
      }
    );
  });
}

module.exports = createFolders;