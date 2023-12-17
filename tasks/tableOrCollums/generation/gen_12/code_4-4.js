
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (columnHeaders.length > 1) {
    // Check if there are at least 2 rows of data below the headers
    if (lines.length >= 3) {
      const dataRows = lines.slice(2);
      let isColumns = true;
      for (let row of dataRows) {
        const rowData = row.split(/\s{2,}/);
        if (rowData.length !== columnHeaders.length) {
          isColumns = false;
          break;
        }
      }
      if (isColumns) {
        return "COLUMNS";
      }
    }
  }

  // If the text does not match the column structure, return "NORMAL"
  return "NORMAL";
}
