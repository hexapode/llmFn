
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  // Check if the text contains a typical table-like structure
  const hasTableStructure = lines.some(line => line.includes("|") || line.includes("  "));
  // Check if there are multiple lines with the same number of columns
  const hasColumns = lines.filter(line => line.trim().split(/\s+/).length > 1).length > 1;

  // If there is a typical table-like structure, it's likely to be a table
  if (hasTableStructure) {
    return "TABLE";
  }
  // If there are multiple lines with the same number of columns, it's columns
  else if (hasColumns) {
    return "COLUMNS";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
