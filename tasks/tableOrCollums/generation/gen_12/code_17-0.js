
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents columns with aligned data
  if (lines.length > 2) {
    const columnWidths = lines[0].match(/\S+/g).map(match => match.length); // Get the widths of the columns based on the first line
    const dataRows = lines.slice(1); // Exclude the first line
    const isAlignedColumns = dataRows.every(row => {
      const cells = row.match(/\S+/g);
      return cells.length === columnWidths.length &&
             cells.every((cell, index) => cell.length === columnWidths[index]);
    });
    if (isAlignedColumns) {
      return "COLUMNS";
    }
  }

  // If the text does not match the column structure, return "NORMAL"
  return "NORMAL";
}
