
function doesItContainTableOrColumns(inputText) {
  // Use regular expressions to search for common table and column patterns
  const tablePattern = /(\b\w+\b\s+){4,}\b\w+\b/; // Pattern for detecting a table
  const columnPattern = /\b\w+\b\s+(\d+\s*%*\s*){2,}/; // Pattern for detecting columns
  
  const containsTable = tablePattern.test(inputText);
  const containsColumns = columnPattern.test(inputText);
  
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
