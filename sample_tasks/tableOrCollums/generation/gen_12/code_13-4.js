
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Function to determine if a line represents a data row
  function isDataRow(line) {
    return line.split(/\s{2,}/).length > 1; // Split the line by multiple spaces and check if it contains multiple columns
  }

  // Check for repeated patterns of headers and data rows to identify a table
  let consecutiveDataRows = 0;
  for (let i = 1; i < lines.length; i++) {
    if (isDataRow(lines[i])) {
      consecutiveDataRows++;
      if (consecutiveDataRows >= 2) {
        return "TABLE";
      }
    } else {
      consecutiveDataRows = 0;
    }
  }

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/);
  if (columnHeaders.length > 1) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
