module.exports = [
  "domain/entities",
  "domain/repositories",
  "domain/value-objects",

  "application/mappers",
  "application/use-cases/commands/handlers",
  "application/use-cases/commands/implements",
  "application/use-cases/queries/handlers",
  "application/use-cases/queries/implements",

  "infra/repositories/database",

  "presentation/controllers",
  "presentation/dtos/inputs",
  "presentation/dtos/outputs",
];