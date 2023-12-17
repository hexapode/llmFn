/* Best score: 12 */


function doesItContainTableOrColumns(inputText) {
  // Use regular expressions to search for common table and column patterns
  const tablePattern = /(\w+(\s+\w+){2,}\s*\n){2,}/; // Pattern for detecting a table
  const columnPattern = /^\s*\w+(\s+\w+)+\s*$/mg; // Pattern for detecting columns
  
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
