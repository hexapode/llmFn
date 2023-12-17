
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n');
  // Check if the lines contain consistent delimiters (e.g., |, ,, or tabs)
  const delimiters = ["|", ",", "\t"];
  const hasConsistentDelimiters = delimiters.some(delimiter => {
    const regex = new RegExp(".*" + delimiter + ".*");
    return lines.every(line => regex.test(line));
  });
  // If there are consistent delimiters, it's likely to be columns
  if (hasConsistentDelimiters) {
    return "COLUMNS";
  }
  // If there are no consistent delimiters, check for the presence of rows
  const hasRows = lines.some(line => line.trim().split(/\s+/).length > 1);
  // If there are both rows and columns, it's likely to be a table
  if (hasRows) {
    return "TABLE_AND_COLUMNS";
  }
  // If there are only rows without consistent delimiters, it's likely a table
  if (hasRows) {
    return "TABLE";
  }
  // If none of the above conditions are met, return "NORMAL"
  return "NORMAL";
}
