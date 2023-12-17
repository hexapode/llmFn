
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');

  // Check if there are any lines with multiple words separated by spaces
  const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);

  // Check if there are multiple lines with the same number of columns
  const columnCounts = lines.map(line => line.trim().split(/\s+/).length);
  const uniqueColumnCounts = new Set(columnCounts);
  const hasMultipleColumnCounts = uniqueColumnCounts.size > 1;

  // If there are both columns and multiple column counts, it's likely to be a table
  if (hasColumns && hasMultipleColumnCounts) {
    return "TABLE";
  }
  // If there are only columns without multiple column counts, it's columns
  else if (hasColumns) {
    return "COLUMNS";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
