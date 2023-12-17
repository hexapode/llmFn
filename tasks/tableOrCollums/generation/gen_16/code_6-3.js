
function doesItContainTableOrColumns(inputText) {
  // Use regular expressions to search for common table patterns
  const tablePattern = /^\s*(\w+(\s+\w+)*\s+)+\n((\w+(\s+\w+)*\s+)+\n)+/; // Pattern for detecting a table
  
  const containsTable = tablePattern.test(inputText);
  
  if (containsTable) {
    return "TABLE";
  } else {
    return "NORMAL";
  }
}
