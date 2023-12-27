
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');

  // Check if any line contains multiple words separated by spaces
  const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);

  // Check if there are multiple lines with the same number of columns
  const hasRows = lines.filter(line => line.trim().split(/\s+/).length > 1).length > 1;

  // If there are both rows and columns, it's TABLE_AND_COLUMNS
  if (hasRows && hasColumns) {
    return "TABLE_AND_COLUMNS";
  }

  // If there are only columns without multiple rows, it's COLUMNS
  else if (hasColumns) {
    return "COLUMNS";
  }

  // If there are multiple rows without columns, it's TABLE
  else if (hasRows) {
    return "TABLE";
  }

  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
