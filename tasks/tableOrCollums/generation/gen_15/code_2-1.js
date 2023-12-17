
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  const words = inputText.split(/[^\w]/).filter(word => word.length > 4).map(word=>word.toLowerCase());

  // Check if the input text contains a pattern typically found in tables
  const tablePattern = /(?:\b\w+\b\s+){3,}\b\w+\b/g; // Look for at least 3 words separated by space
  const foundTablePattern = words.some(word => tablePattern.test(word));

  if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (containsTable || foundTablePattern) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
