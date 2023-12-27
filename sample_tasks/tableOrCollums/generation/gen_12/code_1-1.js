
function doesItContainTableOrColumns(text) {
  // Check if the text contains patterns indicative of tables or columns
  if (text.includes("Table") || text.includes("Column") || /\b\d+\s+[A-Za-z]/.test(text)) {
    return "TABLE_AND_COLUMNS";
  } else {
    return "NORMAL";
  }
}
