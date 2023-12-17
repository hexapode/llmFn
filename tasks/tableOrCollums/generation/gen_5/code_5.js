
function doesItContainTableOrColumns(inputText) {
  // Use regular expressions to search for typical table or column patterns
  const tablePattern = /\+.*\+.*\+.*\+/;
  const columnPattern = /^\s*\|.+\|\s*$/m; // Update the column pattern to account for leading and trailing spaces and multiline input
  
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
