
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /\b(table|thead|tbody|th|tr|td)\b/i.test(inputText);
  const containsColumns = /\b(column|col|row|cell)\b/i.test(inputText);

  if (containsTable && !containsColumns) {
    return "TABLE";
  } else if (!containsTable && containsColumns) {
    return "COLUMNS";
  } else if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  } else {
    return "NORMAL";
  }
}
