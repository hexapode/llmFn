
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
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (columnHeaders.length > 1) {
    // Check if all other lines also contain the same number of columns
    if (lines.slice(1).every(line => {
      const columns = line.split(/\s{2,}/);
      return columns.length === columnHeaders.length;
    })) {
      return "COLUMNS";
    }
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
