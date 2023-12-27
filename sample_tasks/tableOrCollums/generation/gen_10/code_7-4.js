
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  // Check if any line contains multiple words separated by spaces
  const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);
  // Count the number of non-empty lines
  const nonEmptyLines = lines.filter(line => line.trim().length > 0).length;
  // If there are multiple non-empty lines and at least one line with columns, it's likely to be columns
  if (nonEmptyLines > 1 && hasColumns) {
    return "COLUMNS";
  }
  // If there are no columns but multiple non-empty lines, it's a normal format
  else if (nonEmptyLines > 1) {
    return "NORMAL";
  }
  // If only one non-empty line, it's likely to be a table
  else {
    return "TABLE";
  }
}
