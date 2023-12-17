
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related patterns
  const containsTable = /\b\d+\s+\|\s+\d+\b/.test(inputText); // Check for a pattern like "10 | 20"
  const containsColumns = /\b\d+\s+(\|\s+\d+\s+)*\b/.test(inputText); // Check for a pattern like "10 | 20 | 30"

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
