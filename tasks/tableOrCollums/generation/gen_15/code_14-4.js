
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Check for specific patterns to differentiate between table and columns
  if (containsTable && containsColumns) {
    // Determine the layout by analyzing the text structure
    const lines = inputText.trim().split('\n');
    const avgLineLength = lines.reduce((total, line) => total + line.length, 0) / lines.length;

    // If the average line length is relatively short, consider it as columnar data
    if (avgLineLength < 60) {
      return "COLUMNS";
    } else {
      return "TABLE";
    }
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
