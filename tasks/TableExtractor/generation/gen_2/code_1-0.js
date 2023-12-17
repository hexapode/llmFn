
function transformToMarkdownTable(text) {
  const lines = text.split('\n');
  let tableFound = false;
  let tables = [];

  for (let i = 0; i < lines.length; i++) {
    if (isTableLine(lines[i])) {
      let tableContent = extractTableContent(lines, i);
      tables.push(tableContent);
      tableFound = true;
    }
  }

  if (tableFound) {
    let markdownTables = '';
    tables.forEach((table, index) => {
      if (index > 0) {
        markdownTables += '\n\n';
      }
      markdownTables += generateMarkdownTable(table);
    });
    return markdownTables;
  } else {
    return "NO_TABLE";
  }
}

function isTableLine(line) {
  // Modify this function based on the variations found in the OCR output
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

  markdownTable += '|';
  for (let i = 0; i < tableContent[0].split('|').length - 1; i++) {
    markdownTable += '---|';
  }
  markdownTable += '\n';

  tableContent.forEach((row) => {
    markdownTable += row + '\n';
  });

  return markdownTable;
}
