
function doesItContainTableOrColumns(text) {
  // Check if the text represents a table
  const containsTable = text.includes("TABLE");

  // Check if the text represents columns
  const containsColumns = text.includes("COLUMNS");

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
