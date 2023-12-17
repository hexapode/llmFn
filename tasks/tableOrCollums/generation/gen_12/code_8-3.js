
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const columnCount = lines[0].split(/\s{2,}/).length; // Get the number of columns in the first row
    let isTable = true;
    for (let i = 1; i < lines.length; i++) {
      const rowData = lines[i].split(/\s{2,}/);
      if (rowData.length !== columnCount) {
        isTable = false;
        break;
      }
    }
    if (isTable) {
      return "TABLE";
    }
  }

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (columnHeaders.length > 1) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
