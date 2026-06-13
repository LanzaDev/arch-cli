function render(template, variables) {
  let result = template;

  Object.entries(variables)
    .forEach(([key, value]) => {
      result = result.replaceAll(
        `{{${key}}}`,
        value
      );
    });

  return result;
}

module.exports = render;