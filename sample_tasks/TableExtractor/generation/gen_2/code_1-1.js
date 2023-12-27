
function transformToMarkdownTable(text) {
  const lines = text.trim().split('\n');
  let tableFound = false;
  let tables = [];

  lines.forEach((line, index) => {
    if (isTableLine(line)) {
      let tableContent = extractTableContent(lines, index);
      tables.push(tableContent);
      tableFound = true;
    }
  });

  if (tableFound) {
    let markdownTables = '';
    tables.forEach((table, index) => {
      if (index > 0) {
        markdownTables += '\n\n'; // Add a separator between tables
      }
      markdownTables += generateMarkdownTable(table);
    });
    return markdownTables;
  } else {
    return "NO_TABLE";
  }
}

function isTableLine(line) {
  return line.trim().startsWith('|');
}

function extractTableContent(lines, startingLineIndex) {
  let tableContent = [];
  let i = startingLineIndex;
  
  while (i < lines.length && isTableLine(lines[i])) {
    tableContent.push(lines[i]);
    i++;
  }

  return tableContent;
}

function generateMarkdownTable(tableContent) {
  let markdownTable = '';

  tableContent.forEach((row) => {
    markdownTable += row + '\n';
  });

  return markdownTable;
}
