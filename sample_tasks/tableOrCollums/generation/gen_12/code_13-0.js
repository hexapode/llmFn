
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  const tablePattern = /^\|.*\|$/; // Pattern for a row of data enclosed in '|'
  if (lines.every(line => tablePattern.test(line))) {
    return "TABLE";
  }

  // Check if the text represents columns
  const columnPattern = /^[^\s]+\s{2,}[^\s]+(\s{2,}[^\s]+)*$/; // Pattern for multiple columns separated by double spaces
  if (lines.every(line => columnPattern.test(line))) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
