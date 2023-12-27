
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  let isTable = false;
  for (let i = 0; i < lines.length; i++) {
    const row = lines[i].split(/\s{2,}/); // Split the line by multiple spaces
    if (i > 0 && row.length > 1 && row.length === lines[1].split(/\s{2,}/).length) {
      isTable = true;
      break;
    }
  }
  if (isTable) {
    return "TABLE";
  }

  // Check if the text represents columns
  let isColumns = false;
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (columnHeaders.length > 1) {
    isColumns = true;
  }
  if (isColumns) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
