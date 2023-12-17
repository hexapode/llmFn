
function doesItContainTableOrColumns(inputText) {
  // Check for patterns resembling a table or columns
  const containsTableStructure = /\b\|\b/.test(inputText); // Check for vertical line patterns
  const containsColumnStructure = /\b--\b/.test(inputText); // Check for horizontal line patterns

  // Check for patterns commonly found in tables
  const containsRows = /(row|tr)/i.test(inputText); // Check for rows
  const containsCells = /(cell|td)/i.test(inputText); // Check for cells

  // Use the above patterns to classify the input
  if (containsTableStructure && containsRows && containsCells) {
    return "TABLE";
  } else if (containsColumnStructure && containsRows && containsCells) {
    return "COLUMNS";
  } else if ((containsTableStructure || containsColumnStructure) && (containsRows || containsCells)) {
    return "TABLE_AND_COLUMNS";
  } else {
    return "NORMAL";
  }
}
