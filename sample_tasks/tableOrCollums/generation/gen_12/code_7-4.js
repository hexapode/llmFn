
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  let isTable = true;
  const firstLineLength = lines[0].length;
  lines.forEach(line => {
    if (line.length !== firstLineLength) {
      isTable = false;
    }
  });
  if (isTable) {
    return "TABLE";
  }

  // Check if the text represents columns
  let isColumns = true;
  lines.forEach(line => {
    const columns = line.split(/\s{2,}/);
    if (columns.length !== 1) {
      isColumns = false;
    }
  });
  if (isColumns) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
