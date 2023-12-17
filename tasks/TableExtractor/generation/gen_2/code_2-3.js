
function transformToMarkdownTable(text) {
  const lines = text.split('\n');
  let tableFound = false;
  let tables = [];

  let tableStartIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (isTableHeader(lines[i]) && tableStartIndex === -1) {
      tableStartIndex = i;
    } else if (isTableFooter(lines[i]) && tableStartIndex !== -1) {
      let tableContent = lines.slice(tableStartIndex, i + 1);
      tables.push(tableContent);
      tableStartIndex = -1;
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

function isTableHeader(line) {
  return line.trim().match(/^\|.*\|$/);
}

function isTableFooter(line) {
  return line.trim().match(/^\|[-:\s]*\|$/);
}

function generateMarkdownTable(tableContent) {
  // code for generating the markdown table remains as is
  // ...
}
