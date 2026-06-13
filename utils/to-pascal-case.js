function toPascalCase(text) {
  return text
    .split("-")
    .map(word =>
      word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

module.exports = toPascalCase;