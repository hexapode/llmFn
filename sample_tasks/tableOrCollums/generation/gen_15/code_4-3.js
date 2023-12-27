
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  if (containsTable && containsColumns) {
    // Check for additional patterns to confirm the presence of both tables and columns
    const tablePattern = /<\s*table[^>]*>.*<\s*\/\s*table\s*>/gi;
    const columnPattern = /<\s*td[^>]*>.*<\s*\/\s*td\s*>/gi;
    
    const tableMatches = inputText.match(tablePattern);
    const columnMatches = inputText.match(columnPattern);
    
    if (tableMatches && columnMatches) {
      return "TABLE_AND_COLUMNS";
    } else if (tableMatches) {
      return "TABLE";
    } else if (columnMatches) {
      return "COLUMNS";
    }
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  }
  
  return "NORMAL";
}
