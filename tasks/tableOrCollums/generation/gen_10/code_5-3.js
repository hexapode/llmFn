
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check for the presence of tabular structure indicators
  const hasTabularStructure = lines.some(line => line.includes('   ') || line.includes('\t'));

  // If the input text contains a tabular structure, it is likely to be a table
  if (hasTabularStructure) {
    return "TABLE";
  }

  // Check if any line contains multiple words separated by spaces
  const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);

  // If there are multiple words in any line, it's likely to be columns
  if (hasColumns) {
    return "COLUMNS";
  }

  // If none of the above conditions are met, return "NORMAL"
  return "NORMAL";
}
