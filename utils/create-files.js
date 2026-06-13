const fs = require("fs");
const path = require("path");

function createFile(basePath, relativePath) {

  const filePath = path.join(
    basePath,
    relativePath
  );

  fs.writeFileSync(
    filePath,
    ""
  );
}

function createFiles(basePath) {

  const files = [

    // DOMAIN

    "domain/entities/dummy.entity.ts",
    "domain/repositories/dummy.repository.ts",
    "domain/value-objects/dummy.vo.ts",


    // APPLICATION - COMMANDS - IMPL

    "application/use-cases/commands/implements/dummy.command.ts",
    "application/use-cases/commands/implements/dummy.command.spec.ts",

    "application/use-cases/commands/implements/dummy-2.command.ts",
    "application/use-cases/commands/implements/dummy-2.command.spec.ts",

    "application/use-cases/commands/implements/dummy-3.command.ts",
    "application/use-cases/commands/implements/dummy-3.command.spec.ts",

    "application/use-cases/commands/implements/dummy-4.command.ts",
    "application/use-cases/commands/implements/dummy-4.command.spec.ts",

    "application/use-cases/commands/implements/dummy-5.command.ts",
    "application/use-cases/commands/implements/dummy-5.command.spec.ts",


    // APPLICATION - QUERIES - IMPL

    "application/use-cases/queries/implements/dummy.query.ts",
    "application/use-cases/queries/implements/dummy.query.spec.ts",

    "application/use-cases/queries/implements/dummy-2.query.ts",
    "application/use-cases/queries/implements/dummy-2.query.spec.ts",

    "application/use-cases/queries/implements/dummy-3.query.ts",
    "application/use-cases/queries/implements/dummy-3.query.spec.ts",

    "application/use-cases/queries/implements/dummy-4.query.ts",
    "application/use-cases/queries/implements/dummy-4.query.spec.ts",

    "application/use-cases/queries/implements/dummy-5.query.ts",
    "application/use-cases/queries/implements/dummy-5.query.spec.ts",


    // APPLICATION - COMMAND - HANDLERS

    "application/use-cases/commands/handlers/dummy.handler.ts",
    "application/use-cases/commands/handlers/dummy.handler.spec.ts",

    "application/use-cases/commands/handlers/dummy-2.handler.ts",
    "application/use-cases/commands/handlers/dummy-2.handler.spec.ts",

    "application/use-cases/commands/handlers/dummy-3.handler.ts",
    "application/use-cases/commands/handlers/dummy-3.handler.spec.ts",

    "application/use-cases/commands/handlers/dummy-4.handler.ts",
    "application/use-cases/commands/handlers/dummy-4.handler.spec.ts",

    "application/use-cases/commands/handlers/dummy-5.handler.ts",
    "application/use-cases/commands/handlers/dummy-5.handler.spec.ts",

    // APPLICATION - QUERY - HANDLERS

    "application/use-cases/queries/handlers/dummy.handler.ts",
    "application/use-cases/queries/handlers/dummy.handler.spec.ts",

    "application/use-cases/queries/handlers/dummy-2.handler.ts",
    "application/use-cases/queries/handlers/dummy-2.handler.spec.ts",

    "application/use-cases/queries/handlers/dummy-3.handler.ts",
    "application/use-cases/queries/handlers/dummy-3.handler.spec.ts",

    "application/use-cases/queries/handlers/dummy-4.handler.ts",
    "application/use-cases/queries/handlers/dummy-4.handler.spec.ts",

    "application/use-cases/queries/handlers/dummy-5.handler.ts",
    "application/use-cases/queries/handlers/dummy-5.handler.spec.ts",


    // USE CASES

    // "application/use-cases/dummy.use-case.ts",
    // "application/use-cases/dummy.use-case.spec.ts",

    // "application/use-cases/dummy-2.use-case.ts",
    // "application/use-cases/dummy-2.use-case.spec.ts",

    // "application/use-cases/dummy-3.use-case.ts",
    // "application/use-cases/dummy-3.use-case.spec.ts",

    // "application/use-cases/dummy-4.use-case.ts",
    // "application/use-cases/dummy-4.use-case.spec.ts",

    // "application/use-cases/dummy-5.use-case.ts",
    // "application/use-cases/dummy-5.use-case.spec.ts",


    // MAPPERS

    "application/mappers/dummy.mapper.ts",
    "application/mappers/dummy-2.mapper.ts",
    "application/mappers/dummy-3.mapper.ts",
    "application/mappers/dummy-4.mapper.ts",
    "application/mappers/dummy-5.mapper.ts",


    // INFRA

    "infra/repositories/database/dummy.repository.ts",


    // PRESENTATION

    "presentation/controllers/dummy.controller.ts",

    "presentation/dtos/inputs/dummy.input.ts",
    "presentation/dtos/inputs/dummy-2.input.ts",
    "presentation/dtos/inputs/dummy-3.input.ts",

    "presentation/dtos/outputs/dummy.output.ts",
    "presentation/dtos/outputs/dummy-2.output.ts",
    "presentation/dtos/outputs/dummy-3.output.ts",
  ];

  files.forEach(file => {
    createFile(basePath, file);
  });
}

module.exports = createFiles;