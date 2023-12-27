
function doesItContainTableOrColumns(inputText) {
  const lines = inputText.split('\n').map(line => line.trim());
  
  // Check for patterns that indicate the presence of a table or columns
  const containsTableHeader = lines.some(line => line.match(/^\s*(\d+\.)?\s*[A-Z]/)); // Check for lines starting with a number or capital letter
  const containsRowSeparator = lines.some(line => line.includes('---') || line.includes('___') || line.match(/(—|-|_){2,}/)); // Check for common row separators
  
  if (containsTableHeader && containsRowSeparator) {
    return "TABLE";
  } else if (containsTableHeader) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
