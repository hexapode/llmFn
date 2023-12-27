
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const headerRow = lines[1].split(/\s{2,}|\t| \| /); // Split the second line by multiple spaces, tabs, or vertical bars
    const dataRow = lines[2].split(/\s{2,}|\t| \| /); // Split the third line by multiple spaces, tabs, or vertical bars
    if (headerRow.length === dataRow.length) {
      return "TABLE";
    }
  }

  // Check if the text represents columns
  const columnSeparator = /\s{2,}|\t| \| /; // Define the column separator pattern
  const columnHeaders = lines[0].split(columnSeparator); // Split the first line using the column separator pattern
  if (columnHeaders.length > 1) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
