
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());
  
  // Check if there are consistent column separators in the first 3 lines
  if (lines.length >= 3) {
    const firstThreeLines = lines.slice(0, 3);
    const columnCount = firstThreeLines[0].split(/\s{2,}/).length;
    const hasConsistentSeparators = firstThreeLines.every(line => line.split(/\s{2,}/).length === columnCount);
    if (hasConsistentSeparators) {
      return "TABLE";
    }
  }

  // Check if the first line contains column headers
  const columnHeaders = lines[0].split(/\s{2,}/);
  if (columnHeaders.length > 1) {
    return "COLUMNS";
  }

  // If the text does not match any table or column structure, return "NORMAL"
  return "NONE";
}
