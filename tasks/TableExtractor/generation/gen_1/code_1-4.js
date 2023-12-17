
function transformToMarkdownTable(text) {
  let lines = text.split('\n');
  let tables = [];
  let inTable = false;
  let table = [];

  for (let line of lines) {
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (!inTable) {
        inTable = true;
      }
      table.push(line.trim());
    } else {
      if (inTable) {
        inTable = false;
        tables.push(table.join('\n'));
        table = [];
      }
    }
  }

  if (tables.length > 0) {
    return tables.join('\n\n');
  } else {
    return 'NO_TABLE';
  }
}
