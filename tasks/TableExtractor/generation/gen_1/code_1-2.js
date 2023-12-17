
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
        tables.push(table.join('\n'));
        table = [];
        inTable = false;
      }
    }
  }

  if (tables.length > 0) {
    return tables.join('\n\n');
  } else {
    if (table.length > 0) {
      tables.push(table.join('\n'));
    }
    if (tables.length > 0) {
      return tables.join('\n\n');
    } else {
      return 'NO_TABLE';
    }
  }
}
