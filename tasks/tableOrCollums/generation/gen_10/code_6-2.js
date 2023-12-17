
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  // Check if any line contains multiple words separated by spaces
  const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);
  // Check if there are multiple lines with consistent column alignment
  const hasRows = lines.filter(line => line.trim().split(/\s+/).length > 1).length > 1;
  
  // Check if the text contains the word "TABLE" and "COLUMNS"
  const containsTable = text.match(/TABLE/g);
  const containsColumns = text.match(/COLUMNS/g);

  // Determine the final classification based on the analysis
  if (hasRows && hasColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (hasRows) {
    return "TABLE";
  } else if (hasColumns) {
    return "COLUMNS";
  } else if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  } else {
    return "NORMAL";
  }
}
