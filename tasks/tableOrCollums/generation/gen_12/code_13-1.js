
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const headerRow = lines[1].split(/\s{2,}/); // Split the second line by multiple spaces
    const dataRow = lines[2].split(/\s{2,}/); // Split the third line by multiple spaces
    if (headerRow.length === dataRow.length) {
      return "TABLE";
    }
  }

  // Check if the text represents columns
  const columnCounts = lines.map(line => line.split(/\s{2,}/).length); // Count the number of columns in each line
  const isColumnBased = columnCounts.every(count => count === columnCounts[0]); // Check if all lines have the same number of columns
  if (isColumnBased) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
