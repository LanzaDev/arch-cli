module.exports = [
  "domain/entities",
  "domain/enums",
  "domain/repositories",
  "domain/value-objects",

  "application/mappers",
  "application/dtos",
  "application/errors",
  "application/commands/handlers",
  "application/commands/implements",
  "application/queries/handlers",
  "application/queries/implements",

  "infra/repositories/database/mappers",
  // "infra/repositories/cache",

  "presentation/controllers",
  "presentation/dtos/inputs",
  "presentation/dtos/outputs",
];