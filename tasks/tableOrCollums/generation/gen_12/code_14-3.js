
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents columns
  if (lines.length >= 3) {
    const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
    const dataRows = lines.slice(1); // Get all the lines except the first one
    if (columnHeaders.length > 1) {
      // Check if each row has the same number of columns as the headers
      const allRowsHaveSameNumberOfColumns = dataRows.every(row => {
        const rowData = row.split(/\s{2,}/);
        return rowData.length === columnHeaders.length;
      });
      if (allRowsHaveSameNumberOfColumns) {
        return "COLUMNS";
      }
    }
  }

  // If the text does not match the column structure, return "NORMAL"
  return "NORMAL";
}
