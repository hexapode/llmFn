
function transformToMarkdownTable(text) {
  const lines = text.split('\n');
  let inTable = false;
  let tableContent = [];
  let tables = [];

  lines.forEach((line, index) => {
    if (line.includes('|')) {
      if (!inTable) {
        inTable = true;
      }
      tableContent.push(line);
    } else {
      if (inTable) {
        tables.push(tableContent);
        tableContent = [];
        inTable = false;
      }
    }
  });

  if (tables.length > 0) {
    let markdownTables = tables.map(generateMarkdownTable).join('\n\n');
    return markdownTables;
  } else {
    return "NO_TABLE";
  }
}

function generateMarkdownTable(tableContent) {
  let markdownTable = '';

  for (let i = 0; i < tableContent.length; i++) {
    markdownTable += tableContent[i] + '\n';
  }

  return markdownTable;
}
