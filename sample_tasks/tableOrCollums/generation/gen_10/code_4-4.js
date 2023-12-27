
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  // Check if any line contains multiple words separated by spaces
  const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);
  // If there are multiple words in any line, it's likely to be columns
  if (hasColumns) {
    // Check if the text also contains the word "table"
    if (text.toLowerCase().includes("table")) {
      return "TABLE_AND_COLUMNS";
    } else {
      return "COLUMNS";
    }
  }
  // Check if the text contains the word "table"
  else if (text.toLowerCase().includes("table")) {
    return "TABLE";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
