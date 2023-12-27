
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  // Look for consistent number of columns in each line
  const columnCounts = lines.map(line => line.split(/\s{2,}/).length);
  const isConsistentColumns = columnCounts.every(count => count === columnCounts[0]);
  if (isConsistentColumns && columnCounts[0] > 1) {
    return "TABLE";
  }

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (columnHeaders.length > 1) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
