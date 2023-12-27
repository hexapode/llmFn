
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  // Trim each line and split by spaces to check for columns
  const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);
  // Count the number of lines that contain multiple words
  const linesWithColumns = lines.filter(line => line.trim().split(/\s+/).length > 1);
  // Check if there are multiple lines with the same number of columns
  const hasRows = linesWithColumns.length > 1 && linesWithColumns.every(line => line.trim().split(/\s+/).length === linesWithColumns[0].trim().split(/\s+/).length);
  // If there are both rows and columns, it's likely to be a table
  if (hasRows && hasColumns) {
    return "TABLE_AND_COLUMNS";
  }
  // If there are only columns without multiple rows, it's columns
  else if (hasColumns) {
    return "COLUMNS";
  }
  // If there are multiple rows without columns, it's also a table
  else if (hasRows) {
    return "TABLE";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
