
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Check for specific patterns to differentiate between table and columns
  if (containsTable && containsColumns) {
    // The input contains both tables and columns
    // We can further refine this logic by checking for specific patterns tailored to table and columns detection
    // In this case, we'll assume that if there are more row- or cell-related keywords compared to column-related keywords, it's a table
    const rowCellCount = (inputText.match(/(row|cell)/gi) || []).length;
    const columnCount = (inputText.match(/(column|col)/gi) || []).length;

    if (rowCellCount > columnCount) {
      return "TABLE";
    } else {
      return "COLUMNS";
    }
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
