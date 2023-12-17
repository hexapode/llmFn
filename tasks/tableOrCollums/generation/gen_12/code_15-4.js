
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  let tableCount = 0;
  for (let i = 0; i < lines.length; i++) {
    const row = lines[i].split(/\s{2,}/); // Split the line by multiple spaces
    if (row.length > 1 && i > 0) {
      tableCount++;
    }
  }

  if (tableCount >= 2) {
    return "TABLE";
  }

  // Check if the text represents columns
  const firstLineColumns = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (firstLineColumns.length > 1) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
