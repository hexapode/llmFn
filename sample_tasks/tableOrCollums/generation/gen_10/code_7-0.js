
function doesItContainTableOrColumns(text) {
  // Count the number of lines containing non-whitespace characters
  const nonEmptyLines = text.split('\n').filter(line => line.trim() !== '').length;
  // Count the number of lines containing multiple words separated by spaces
  const linesWithColumns = text.split('\n').filter(line => line.trim().split(/\s+/).length > 1).length;
  // Calculate the ratio of lines with columns to non-empty lines
  const ratio = linesWithColumns / nonEmptyLines;

  // Check if the ratio suggests the presence of both table and columns
  if (ratio > 0.6) {
    return "TABLE_AND_COLUMNS";
  }
  // If the ratio suggests the presence of table or columns individually, return the corresponding label
  else if (ratio > 0.3 && ratio <= 0.6) {
    if (linesWithColumns > 1) {
      return "COLUMNS";
    } else {
      return "TABLE";
    }
  }
  // If the ratio does not suggest the presence of table or columns, return "NORMAL"
  else {
    return "NORMAL";
  }
}
