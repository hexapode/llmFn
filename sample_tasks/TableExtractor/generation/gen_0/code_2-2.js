
function transformToMarkdownTable(text) {
  const tableRegex = /[\S\s]*?(\|(.+?)\|(.+?)\|[\s\S]*?)(?=\||$)/g;
  let matches;
  let tables = '';
  while ((matches = tableRegex.exec(text)) !== null) {
    tables += matches[1] + "  \n\n";
  }
  if (tables.trim() !== '') {
    return tables.trim();
  } else {
    return "NO_TABLE";
  }
}
