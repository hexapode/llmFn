
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  let isPotentialTable = true;
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(/\s{2,}/); // Split the line by multiple spaces
    if (row.length !== 3) { // Check if each row has exactly 3 columns
      isPotentialTable = false;
      break;
    }
  }
  if (isPotentialTable) {
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
