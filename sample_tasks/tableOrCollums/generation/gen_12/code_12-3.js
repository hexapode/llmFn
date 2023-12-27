
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  let isTable = true;

  // Check if the text represents a table
  if (lines.length >= 3) {
    const headerRow = lines[1].split(/\s{2,}/); // Split the second line by multiple spaces

    for (let i = 2; i < lines.length; i++) {
      const currentRow = lines[i].split(/\s{2,}/);
      if (headerRow.length !== currentRow.length) {
        isTable = false;
        break;
      }
    }

    if (isTable) {
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
