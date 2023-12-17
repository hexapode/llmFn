
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    // Split the first three lines by multiple spaces
    const headerRow = lines[0].split(/\s{2,}/);
    const secondRow = lines[1].split(/\s{2,}/);
    const dataRow = lines[2].split(/\s{2,}/);

    if (headerRow.length === secondRow.length && secondRow.length === dataRow.length) {
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
