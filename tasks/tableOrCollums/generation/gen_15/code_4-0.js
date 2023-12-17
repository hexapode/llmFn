
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);
  const containsNormalText = !containsTable && !containsColumns;

  // Checking for specific patterns to differentiate between table and columns
  if (containsTable && containsColumns) {
    // Check for specific patterns to differentiate between table and columns
    const tdCount = (inputText.match(/td/gi) || []).length;
    const trCount = (inputText.match(/tr/gi) || []).length;
    // If there are more instances of "td" compared to "tr", consider it as mainly columns
    if (tdCount > trCount) {
      return "COLUMNS";
    } else {
      return "TABLE";
    }
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else if (containsNormalText) {
    return "NORMAL";
  }
}
