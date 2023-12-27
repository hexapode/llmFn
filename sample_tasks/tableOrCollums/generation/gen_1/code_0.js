
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains specific table or column patterns
  const tablePattern = /(\+?-+)+\+?/; // Check for patterns like +------+-----+----+ and similar
  const columnPattern = /(\|[\s\S]+)+\|/; // Check for patterns like | Column 1 | Column 2 | Column 3 | and similar

  const containsTable = tablePattern.test(inputText);
  const containsColumn = columnPattern.test(inputText);

  // Return the appropriate result based on the pattern matches
  if (containsTable && containsColumn) {
    return "TABLE_AND_COLUMNS";
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumn) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
