
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  const hasConsistentColumnStructure = lines.every(line => line.includes('\t')); // Check if every line contains tab ('\t') character
  if (hasConsistentColumnStructure) {
    return "TABLE";
  }

  // Check if the text represents columns
  const hasConsistentColumnCount = lines.every(line => line.split(/\s{2,}/).length === 2); // Check if every line contains exactly 2 columns separated by multiple spaces
  if (hasConsistentColumnCount) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
