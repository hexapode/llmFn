
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  const isTable = lines.some(line => {
    const cells = line.split(/\s{2,}/);
    return cells.length > 1;
  });

  // Check if the text represents columns
  const isColumn = lines.every(line => line.includes('\t'));

  if (isTable && isColumn) {
    return "TABLE_AND_COLUMNS";
  } else if (isTable) {
    return "TABLE";
  } else if (isColumn) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
