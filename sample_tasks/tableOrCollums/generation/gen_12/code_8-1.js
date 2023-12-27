
function doesItContainTableOrColumns(text) {
  // Check if the text represents a table
  const tablePattern = /\s{2,}\d+\.\d+\s+\d+\.\d+\s+\d+\.\d+/;
  const containsTable = tablePattern.test(text);

  // Check if the text represents columns
  const columnPattern = /\s{2,}[A-Za-z0-9-]+\s+(\d+\.\d+)\s+(\d+\.\d+)\s+(\d+\.\d+)/;
  const containsColumns = columnPattern.test(text);

  // Determine the result based on the presence of table and columns
  if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
