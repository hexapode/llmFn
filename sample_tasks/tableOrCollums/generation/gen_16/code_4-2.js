
function doesItContainTableOrColumns(inputText) {
  // Use regular expressions to search for common table and column patterns
  const tablePattern = /\b\d+\s+\b\d+\b\s+\b\d+\b\s+\b\d+\b\s+\b\d+\b/; // Pattern for detecting a table
  const columnPattern = /(\b[\w\s]+)\b\s+(\d[\d,.]*\s*)+/g; // Pattern for detecting columns
  
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
