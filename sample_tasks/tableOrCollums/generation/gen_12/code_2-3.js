
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const possibleTable = lines.slice(1, 3); // Get the second and third lines
    const tableSeparator = " - "; // Assuming a table with separator "-"
    if (possibleTable.every(row => row.includes(tableSeparator))) {
      return "TABLE";
    }
  }

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  const columnValues = lines.slice(1); // Get all lines except the first one
  if (columnHeaders.length > 1 && columnValues.every(value => value.includes(" - "))) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
