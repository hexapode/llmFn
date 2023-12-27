
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  let isTable = true;
  let prevRowColumns = 0;
  for (let i = 1; i < lines.length; i++) {
    const rowColumns = lines[i].split(/\s{2,}/).length;
    if (i === 1) {
      prevRowColumns = rowColumns;
    } else {
      if (rowColumns !== prevRowColumns) {
        isTable = false;
        break;
      }
    }
  }
  if (isTable) {
    return "TABLE";
  }

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/);
  if (columnHeaders.length > 1) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
