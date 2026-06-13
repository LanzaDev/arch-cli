#!/usr/bin/env node

const {
  askArchitecture,
  askModuleName
} = require("./ui/menu");

const {
  startLoading
} = require("./ui/spinner");

const generateDefault =
  require("./generators/module.generator");

const generateCQRS =
  require("./generators/module-cqrs.generator");

async function main() {

  const architecture =
    await askArchitecture();

  const moduleName =
    await askModuleName();

  const spinner =
    startLoading("Criando estrutura...");

  try {

    if (architecture === "default") {
      generateDefault(moduleName);
    }

    if (architecture === "cqrs") {
      generateCQRS(moduleName);
    }

    spinner.succeed("Estrutura criada!");

  } catch (error) {

    spinner.fail("Erro ao criar.");

    console.error(error);
  }
}

main();