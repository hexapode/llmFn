
function transformToMarkdownTable(text) {
  const lines = text.split('\n');
  let tableFound = false;
  let tables = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('|')) {
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

function extractTableContent(lines, startingLineIndex) {
  let tableContent = [];
  let i = startingLineIndex;

  while (i < lines.length && lines[i].includes('|')) {
    tableContent.push(lines[i]);
    i++;
  }

  return tableContent;
}

function generateMarkdownTable(tableContent) {
  let markdownTable = '';

  // Extract the header row and calculate the column widths
  const headerRow = tableContent[0];
  const columnWidths = getColumnWidths(headerRow);

  // The header row
  markdownTable += '|';
  for (let i = 0; i < columnWidths.length; i++) {
    markdownTable += ' ' + '─'.repeat(columnWidths[i] - 1) + ' |';
  }
  markdownTable += '\n';

  // The content rows
  tableContent.forEach((row, index) => {
    if (index === 1) {
      markdownTable += '|';
      for (let i = 0; i < columnWidths.length; i++) {
        markdownTable += '─'.repeat(columnWidths[i]) + '|';
      }
      markdownTable += '\n';
    }
    let cells = row.split('|').map(cell => cell.trim());
    cells = cells.filter(cell => cell !== ''); // Remove empty cells
    if (cells.length > 0) {
      markdownTable += '|';
      for (let i = 0; i < cells.length; i++) {
        markdownTable += ' ' + cells[i] + ' '.repeat(columnWidths[i] - cells[i].length - 1) + '|';
      }
      markdownTable += '\n';
    }
  });

  return markdownTable;
}

function getColumnWidths(headerRow) {
  let columnWidths = [];
  let cells = headerRow.split('|').map(cell => cell.trim());
  cells = cells.filter(cell => cell !== ''); // Remove empty cells
  cells.forEach(cell => {
    columnWidths.push(cell.length + 2); // Add padding
  });
  return columnWidths;
}
