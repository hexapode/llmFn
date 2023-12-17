
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  
  // Check if the text contains the word "table"
  if (text.toLowerCase().includes("table")) {
    // Check if any line contains multiple words separated by spaces
    const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);
    // If there are multiple words in any line, it's likely to be columns
    if (hasColumns) {
      return "TABLE_AND_COLUMNS";
    } else {
      return "TABLE";
    }
  }
  // If the text does not contain the word "table", check if any line contains multiple words separated by spaces
  const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);
  if (hasColumns) {
    return "COLUMNS";
  }
  // If none of the above conditions are met, return "NORMAL"
  return "NORMAL";
}
