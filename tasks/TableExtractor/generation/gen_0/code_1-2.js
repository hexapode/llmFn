
function transformToMarkdownTable(text) {
  const tableRegex = /(.+?)\|(.+?)\|(.+?)\n\|/g;
  let tables = text.match(tableRegex);
  if (tables) {
    return tables.join("\n\n");
  } else {
    return "NO_TABLE";
  }
}
