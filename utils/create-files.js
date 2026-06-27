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
    "domain/enums/dummy.enum.ts",
    "domain/repositories/dummy.repository.ts",
    "domain/repositories/dummy-read.repository.ts",
    "domain/value-objects/dummy.vo.ts",


    // APPLICATION - COMMANDS - IMPL

    "application/commands/implements/dummy.command.ts",
    "application/commands/implements/dummy.command.spec.ts",

    "application/commands/implements/dummy-2.command.ts",
    "application/commands/implements/dummy-2.command.spec.ts",

    "application/commands/implements/dummy-3.command.ts",
    "application/commands/implements/dummy-3.command.spec.ts",

    "application/commands/implements/dummy-4.command.ts",
    "application/commands/implements/dummy-4.command.spec.ts",

    "application/commands/implements/dummy-5.command.ts",
    "application/commands/implements/dummy-5.command.spec.ts",


    // APPLICATION - QUERIES - IMPL

    "application/queries/implements/dummy.query.ts",
    "application/queries/implements/dummy.query.spec.ts",

    "application/queries/implements/dummy-2.query.ts",
    "application/queries/implements/dummy-2.query.spec.ts",

    "application/queries/implements/dummy-3.query.ts",
    "application/queries/implements/dummy-3.query.spec.ts",

    "application/queries/implements/dummy-4.query.ts",
    "application/queries/implements/dummy-4.query.spec.ts",

    "application/queries/implements/dummy-5.query.ts",
    "application/queries/implements/dummy-5.query.spec.ts",


    // APPLICATION - COMMAND - HANDLERS

    "application/commands/handlers/dummy.handler.ts",
    "application/commands/handlers/dummy.handler.spec.ts",

    "application/commands/handlers/dummy-2.handler.ts",
    "application/commands/handlers/dummy-2.handler.spec.ts",

    "application/commands/handlers/dummy-3.handler.ts",
    "application/commands/handlers/dummy-3.handler.spec.ts",

    "application/commands/handlers/dummy-4.handler.ts",
    "application/commands/handlers/dummy-4.handler.spec.ts",

    "application/commands/handlers/dummy-5.handler.ts",
    "application/commands/handlers/dummy-5.handler.spec.ts",

    // APPLICATION - QUERY - HANDLERS

    "application/queries/handlers/dummy.handler.ts",
    "application/queries/handlers/dummy.handler.spec.ts",

    "application/queries/handlers/dummy-2.handler.ts",
    "application/queries/handlers/dummy-2.handler.spec.ts",

    "application/queries/handlers/dummy-3.handler.ts",
    "application/queries/handlers/dummy-3.handler.spec.ts",

    "application/queries/handlers/dummy-4.handler.ts",
    "application/queries/handlers/dummy-4.handler.spec.ts",

    "application/queries/handlers/dummy-5.handler.ts",
    "application/queries/handlers/dummy-5.handler.spec.ts",


    // ERRORS

    "application/errors/dummy.error.ts",
    "application/errors/dummy-2.error.ts",

    // DTOs
    
    "application/dtos/dummy.dto.ts",
    "application/dtos/dummy-2.dto.ts",
    "application/dtos/dummy-3.dto.ts",
    "application/dtos/dummy-4.dto.ts",
    
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

    "infra/repositories/database/mappers/dummy-read.mapper.ts",
    "infra/repositories/database/mappers/dummy.mapper.ts",
    "infra/repositories/database/dummy-read.repository.ts",
    "infra/repositories/database/dummy.repository.ts",


    // PRESENTATION

    "presentation/controllers/dummy.controller.ts",
    "presentation/controllers/dummy-2.controller.ts",
    "presentation/controllers/dummy-3.controller.ts",
    "presentation/controllers/dummy-4.controller.ts",

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