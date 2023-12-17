
function transformToMarkdownTable(text) {
  const lines = text.split('\n');
  let tableFound = false;
  let tables = [];

  for (let i = 0; i < lines.length; i++) {
    // Detecting the table pattern
    if (lines[i].includes('|') && lines[i+1].includes('|')) {
      let tableContent = extractTableContent(lines, i);
      tables.push(tableContent);
      tableFound = true;
    }
  }

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
