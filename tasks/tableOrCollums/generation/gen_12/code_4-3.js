
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');

  // Check if the text represents a table
  let hasHeader = false;
  let hasSeparator = false;
  let hasData = false;

  for (let line of lines) {
    const columns = line.split(/\s{2,}/); // Split the line by multiple spaces

    if (columns.length > 1) {
      if (!hasHeader) {
        hasHeader = true;
      } else if (!hasSeparator && columns.every(cell => /[-]+/.test(cell))) {
        hasSeparator = true;
      } else if (hasHeader && !hasSeparator) {
        hasData = true;
      }
    }
  }

  if (hasHeader && hasSeparator && hasData) {
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
