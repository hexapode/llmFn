
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Check for specific patterns to differentiate between table and columns
  // Check for specific patterns to differentiate between table and columns
  const tablePattern = /\b\d+\s+(\d+\.\d+\s+\d+\.\d+\s+\d+\.\d+)\s*([\s\S]*?)\d+\s+(\d+\.\d+\s+\d+\.\d+\s+\d+\.\d+)\s*\b/g;

  if (containsTable && containsColumns) {
    // Check for specific pattern to determine if it's combination of table and columns
    if (tablePattern.test(inputText)) {
      return "TABLE_AND_COLUMNS";
    } else {
      // Check if there are more instances of "td" compared to "tr" to determine if it's mainly columns
      const tdCount = (inputText.match(/td/gi) || []).length;
      const trCount = (inputText.match(/tr/gi) || []).length;
      if (tdCount > trCount) {
        return "COLUMNS";
      } else {
        return "TABLE";
      }
    }
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
