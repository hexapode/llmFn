
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  // Check if any line contains horizontal line, vertical line or plus signs representing a table structure
  const hasTableStructure = lines.some(line => line.includes("─") || line.includes("|") || line.includes("+"));
  // Check if there are multiple lines with multiple spaces representing columns
  const hasColumns = lines.filter(line => line.trim().split(/\s{2,}/).length > 1).length > 1;
  // If there is a recognized table structure, it's likely a table
  if (hasTableStructure) {
    return "TABLE";
  }
  // If there are only columns without a recognized table structure, it's columns
  else if (hasColumns) {
    return "COLUMNS";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
