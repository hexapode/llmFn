
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const dataRows = lines.slice(2); // Exclude the first two lines as they are headers
    const columnCounts = dataRows.map(row => row.split(/\s{2,}/).length); // Count the number of columns in each data row
    const columnCountSet = new Set(columnCounts); // Use a set to get unique column counts
    if (columnCountSet.size === 1) {
      return "TABLE";
    }
  }

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/);
  if (columnHeaders.length > 1) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
