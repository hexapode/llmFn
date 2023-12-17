
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const dataRows = lines.slice(1); // Exclude the first line (column headers)
    const columnCount = lines[1].split(/\s{2,}/).length; // Get the column count based on the second line
    for (let i = 0; i < dataRows.length; i++) {
      const rowData = dataRows[i].split(/\s{2,}/);
      if (rowData.length !== columnCount) {
        // If any row does not have the same number of columns, it is not a table
        return "COLUMNS";
      }
    }
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
