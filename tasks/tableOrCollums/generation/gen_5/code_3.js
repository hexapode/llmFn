
function doesItContainTableOrColumns(inputText) {
  // Use regular expressions to search for typical table or column patterns
  const tablePattern = /SF\s*Designatio(?:\s*|\n*)\-+.*\n(?:.*\n)+\-+/;
  const columnPattern = /^[ *]*[A-Za-z0-9\-]+[ ]+[A-Za-z0-9\-]+(?:[ ]+[A-Za-z0-9\-]+)?[ ]+[A-Za-z0-9\-]+\s+\d+/;
  
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
