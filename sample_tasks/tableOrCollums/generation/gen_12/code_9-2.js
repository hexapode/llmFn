
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  let isTable = true;
  const firstLineParts = lines[0].split(/\s{2,}/);
  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(/\s{2,}/);
    if (parts.length !== firstLineParts.length) {
      isTable = false;
      break;
    }
  }
  if (isTable) {
    return "TABLE";
  }

  // Check if the text represents columns
  let isColumns = false;
  const firstLineColumns = lines[0].split('|');
  if (firstLineColumns.length > 1) {
    isColumns = true;
  }
  if (isColumns) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
