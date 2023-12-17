
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const headerRow = lines[1].split(/\s{2,}/); // Split the second line by multiple spaces
    const dataRow = lines[2].split(/\s{2,}/); // Split the third line by multiple spaces
    if (headerRow.length === dataRow.length) {
      for (let i = 3; i < lines.length; i++) {
        const rowData = lines[i].split(/\s{2,}/);
        if (rowData.length !== headerRow.length) {
          return "NORMAL";
        }
      }
      return "TABLE";
    }
  }

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (columnHeaders.length > 1) {
    for (let i = 1; i < lines.length; i++) {
      const rowData = lines[i].split(/\s{2,}/);
      if (rowData.length !== columnHeaders.length) {
        return "NORMAL";
      }
    }
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
