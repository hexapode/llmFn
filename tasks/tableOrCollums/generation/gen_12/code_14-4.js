
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check for the presence of row and column structures to identify tables and/or columns
  let hasTable = false;
  let hasColumns = false;

  // Check for consistent column separators
  const columnSeparatorRegex = /\s{2,}|\t/; // Regex for multiple spaces or tabs
  const firstDataRow = lines.find(line => line.match(columnSeparatorRegex));
  if (firstDataRow) {
    const columnCount = firstDataRow.split(columnSeparatorRegex).length;
    if (lines.every(line => line.split(columnSeparatorRegex).length === columnCount)) {
      hasTable = true;
    }
  }

  // Check for the presence of column headers
  const columnHeaderRow = lines[0].split(columnSeparatorRegex);
  if (columnHeaderRow.length > 1) {
    hasColumns = true;
  }

  // Determine the result based on the presence of tables and/or columns
  if (hasTable && hasColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (hasTable) {
    return "TABLE";
  } else if (hasColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
