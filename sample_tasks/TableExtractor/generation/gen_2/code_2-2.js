
function transformToMarkdownTable(text) {
  const lines = text.split('\n');
  let tableFound = false;
  let tables = [];

  let tableRegex = /^\|\s.*\s\|.*\|$/; // Regex to match a Markdown table row

  let tableContent = []; // Array to store the current table content

  for (let i = 0; i < lines.length; i++) {
    if (tableRegex.test(lines[i])) {
      // If the line matches the table format, add it to the current table content
      tableContent.push(lines[i]);
      tableFound = true;
    } else {
      if (tableContent.length > 0) {
        // If we were gathering table content and encounter a non-table row, consider it the end of the table
        tables.push(tableContent);
        tableContent = []; // Reset the tableContent array for the next table
      }
    }
  }

  if (tableContent.length > 0) {
    // If there is remaining table content after processing all lines, it indicates the end of the last table
    tables.push(tableContent);
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

function generateMarkdownTable(tableContent) {
  let markdownTable = '';

  // ... (remaining code remains the same)

  return markdownTable;
}
