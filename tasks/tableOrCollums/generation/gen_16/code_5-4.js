
function doesItContainTableOrColumns(inputText) {
  // Use regular expressions to search for common table and column patterns
  const tablePattern = /(\w+\s+){4,}\w+/; // Pattern for detecting a table
  const columnPattern = /\w+\s+(\d+\s*%*\s*){2,}/; // Pattern for detecting columns
  
  const containsTable = tablePattern.test(inputText);
  const containsColumns = columnPattern.test(inputText);
  
  if (containsTable && !containsColumns) {
    return "TABLE";
  } else if (containsColumns && !containsTable) {
    return "COLUMNS";
  } else if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  } else {
    return "NORMAL";
  }
}
