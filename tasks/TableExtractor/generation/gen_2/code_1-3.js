
function transformToMarkdownTable(text) {
  // Step 1: Detect if there are tables in the text
  const lines = text.split('\n');
  let tableFound = false;
  let tables = [];

  for (let i = 0; i < lines.length; i++) {
    if (isTableLine(lines[i])) {
      // Step 2: Extracting the table content
      let tableContent = extractTableContent(lines, i);
      tables.push(tableContent);
      tableFound = true;
    }
  }

  if (tableFound) {
    // Step 3: Generating the Markdown tables
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
  return line.trim().startsWith('|') && line.trim().endsWith('|');
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

  // The header row
  markdownTable += '|';
  for (let i = 0; i < tableContent[0].split('|').length - 1; i++) {
    markdownTable += '---|';
  }
  markdownTable += '\n';

  // The content rows
  tableContent.forEach((row) => {
    markdownTable += row + '\n';
  });

  return markdownTable;
}
