
function doesItContainTableOrColumns(text) {
  // Check if the text contains any table-related keywords
  const tableKeywords = ["row", "column", "table", "cell", "header"];
  const containsTableKeywords = tableKeywords.some(keyword => text.toLowerCase().includes(keyword));
  
  // Check if the text contains any characters commonly used in tables or columns
  const containsTableCharacters = /(\||\+|-|_|\s\|\s)/.test(text);
  
  // If the text contains table-related keywords or characters, classify it as TABLE or COLUMNS
  if (containsTableKeywords || containsTableCharacters) {
    // Check for actual structured data
    const lines = text.split('\n');
    const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);
    const hasRows = lines.filter(line => line.trim().split(/\s+/).length > 1).length > 1;
    
    if (hasRows && hasColumns) {
      return "TABLE";
    }
    else if (hasColumns) {
      return "COLUMNS";
    }
  }
  
  // If the text does not contain table-related keywords, characters, or structured data, classify it as NORMAL
  return "NORMAL";
}
