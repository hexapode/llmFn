
function doesItContainTableOrColumns(inputText) {
  // Use regular expressions to search for typical table or column patterns
  const tablePattern = /\+.*\+.*\+.*\+/;
  const columnPattern = /^\|.+\|/;
  
  const containsTable = tablePattern.test(inputText);
  const containsColumns = columnPattern.test(inputText);
  
  if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else if (!containsTable && !containsColumns) {
    return "NONE";
  } else {
    return "NORMAL";
  }
}
