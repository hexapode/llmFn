
function doesItContainTableOrColumns(text) {
  // Check for typical table patterns using regular expressions
  const tableRegex = /(\s+\S+\s+\|\s+\S+\s+)/g; // Matches patterns like "  Value  |  Quantity  "
  const columnRegex = /\b\w+\b\s+\b\w+\b/g; // Matches patterns like "Service et"

  if (tableRegex.test(text) && columnRegex.test(text)) {
    return "TABLE_AND_COLUMNS";
  }
  else if (tableRegex.test(text)) {
    return "TABLE";
  }
  else if (columnRegex.test(text)) {
    return "COLUMNS";
  }
  else {
    return "NORMAL";
  }
}
