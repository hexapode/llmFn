
function doesItContainTableOrColumns(inputText) {
  // Check for common table patterns
  const tableRegex = /\b([A-Za-z0-9\s-]+\|)+[A-Za-z0-9\s-]+\b/;
  const columnRegex = /\b[A-Za-z0-9\s-]+\|\s[A-Za-z0-9\s-]+\b/;

  // Check for specific table and column patterns
  const containsTable = tableRegex.test(inputText);
  const containsColumns = columnRegex.test(inputText);

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
