
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  
  // Check if any line contains multiple words separated by spaces
  const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);
  
  // Check if there are multiple lines with the same number of columns, which indicates table-like structure
  const hasTableStructure = lines.filter(line => line.trim().split(/\s+/).length > 1).length > 1;
  
  // If there are both rows and columns, or there's a table-like structure, it's likely to be a table
  if (hasTableStructure || (hasColumns && lines.length > 2)) {
    return "TABLE";
  }
  
  // If there are only columns without multiple rows, it's columns
  else if (hasColumns) {
    return "COLUMNS";
  }

  // If none of the above conditions are met, return "NORMAL"
  return "NORMAL";
}
