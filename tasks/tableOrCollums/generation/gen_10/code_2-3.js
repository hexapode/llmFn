
function doesItContainTableOrColumns(text) {
  // Split the text into lines and remove any leading/trailing whitespace
  const lines = text.split('\n').map(line => line.trim());

  // Check for consistent spacing and alignment in the first few lines to determine if it's likely to be columns
  const firstFewLines = lines.slice(0, 5);
  const isLikelyColumns = firstFewLines.every(line => line.includes('  ') || line.includes('\t'));

  // If the text contains the word "table" and is likely to be columns, classify as "TABLE_AND_COLUMNS"
  if (text.toLowerCase().includes("table") && isLikelyColumns) {
    return "TABLE_AND_COLUMNS";
  }
  // If it's likely to be columns, classify as "COLUMNS"
  else if (isLikelyColumns) {
    return "COLUMNS";
  }
  // If the text contains the word "table", classify as "TABLE"
  else if (text.toLowerCase().includes("table")) {
    return "TABLE";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
