
function transformToMarkdownTable(text) {
  // Split the text by new line characters
  let lines = text.split('\n');
  let tables = [];
  let inTable = false;
  let table = [];

  // Iterate through each line of text
  for (let line of lines) {
    // Check if the line starts and ends with '|'
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
    return 'NO_TABLE';
  }
}
