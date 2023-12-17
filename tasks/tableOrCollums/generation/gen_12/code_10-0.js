
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const headerRow = lines[1].split(/\s{2,}/); // Split the second line by multiple spaces
    const dataRow = lines[2].split(/\s{2,}/); // Split the third line by multiple spaces
    if (headerRow.length === dataRow.length) {
      return "TABLE";
    }
  }

  // Check if the text represents columns
  for (const line of lines) {
    const columnHeaders = line.split(/\s{2,}/); // Split the line by multiple spaces
    if (columnHeaders.length > 1) {
      return "COLUMNS";
    }
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
