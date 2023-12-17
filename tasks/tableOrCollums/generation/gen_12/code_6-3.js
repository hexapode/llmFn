
function doesItContainTableOrColumns(text) {
  // Check if the text represents a table
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());
  
  if (lines.length >= 3) {
    const headerRow = lines[1].split(/\s{2,}/); // Split the second line by multiple spaces
    const dataRow = lines[2].split(/\s{2,}/); // Split the third line by multiple spaces
    if (headerRow.length === dataRow.length) {
      for (let i = 3; i < lines.length; i++) {
        const dataCols = lines[i].split(/\s{2,}/); // Split the current line by multiple spaces
        if (dataCols.length !== dataRow.length) {
          return "NORMAL";
        }
      }
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
