
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const headerRow = lines[1].split(/\s{2,}/);
    const dataRow = lines[2].split(/\s{2,}/);
    if (headerRow.length === dataRow.length) {
      // Checking if the header and data rows have multiple words
      if (headerRow.every(cell => cell && cell.includes(' ')) && dataRow.every(cell => cell && cell.includes(' '))) {
        return "TABLE";
      }
    }
  }

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/);
  if (columnHeaders.length > 1 && columnHeaders.every(header => header && header.includes(' '))) {
    return "COLUMNS";
  }

  // If the text is not a table or columns, return "NORMAL"
  return "NONE";
}
