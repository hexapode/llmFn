
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  let columnCount = -1;
  let isTable = true;
  for (let i = 0; i < lines.length; i++) {
    const columns = lines[i].split(/\s{2,}/); // Split the line by multiple spaces
    if (columnCount === -1) {
      columnCount = columns.length;
    } else if (columns.length !== columnCount) {
      isTable = false;
      break;
    }
  }
  if (isTable && columnCount > 1) {
    return "TABLE";
  }

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (columnHeaders.length > 1) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
