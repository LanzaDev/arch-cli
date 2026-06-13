const { select, input } = require("@inquirer/prompts");

async function askArchitecture() {
  return select({
    message: "Escolha a arquitetura:",
    choices: [
      {
        name: "Module",
        value: "default"
      },
      {
        name: "Module CQRS",
        value: "cqrs"
      }
    ]
  });
}

async function askModuleName() {
  return input({
    message: "Nome do módulo:"
  });
}

module.exports = {
  askArchitecture,
  askModuleName
};