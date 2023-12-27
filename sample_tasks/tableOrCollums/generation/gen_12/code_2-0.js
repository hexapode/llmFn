
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const headerRow = lines[1].trim().split(/\s{2,}/); // Split the second line by multiple spaces
    const dataRow = lines[2].trim().split(/\s{2,}/); // Split the third line by multiple spaces
    if (headerRow.length === dataRow.length && headerRow.length > 1) {
      return "TABLE";
    }
  }

  // Check if the text represents columns
  const columnCount = lines[0].trim().split(/\s{2,}/).length; // Count the number of columns in the first line
  const columnData = lines.slice(2).filter(line => line.includes(" ")); // Filter out the lines with only spaces
  if (columnCount > 1 && columnData.length === lines.length - 2) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
