
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');

  // Check if there are multiple lines with the same number of columns
  const hasRows = lines.filter(line => line.trim().split(/\s+/).length > 1).length > 1;

  // Check if any line contains multiple words separated by spaces
  const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);

  // Check if there is a specific pattern of table-like layout
  const hasTableLayout = lines.some(line => line.match(/^\s*\S+(\s+\S+)+\s*$/));

  // Determine the final classification
  if (hasRows && hasColumns && hasTableLayout) {
    return "TABLE_AND_COLUMNS";
  } else if (hasRows && hasTableLayout) {
    return "TABLE";
  } else if (hasColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
