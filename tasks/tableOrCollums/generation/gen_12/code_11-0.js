
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces

  // Identify the number of columns based on the length of the column headers
  const numColumns = columnHeaders.length;

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(/\s{2,}/); // Split the line by multiple spaces

    // If any row doesn't have the same number of columns, it's not a columns structure
    if (row.length !== numColumns) {
      return "NORMAL";
    }
  }

  // If all rows have the same number of columns, it represents columns
  return "COLUMNS";
}
