
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  const rowSeparator = lines.find(line => line.includes('---')); // Look for a row separator
  if (rowSeparator) {
    const firstRow = lines[0].split('|').map(cell => cell.trim()); // Split the first row by the separator
    const secondRow = lines[1].split('|').map(cell => cell.trim()); // Split the second row by the separator
    if (firstRow.length === secondRow.length) {
      return "TABLE";
    }
  }

  // Check if the text represents columns
  const columnSeparator = lines[0].match(/\s{2,}/); // Look for a column separator
  if (columnSeparator && columnSeparator.length > 1) {
      return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
