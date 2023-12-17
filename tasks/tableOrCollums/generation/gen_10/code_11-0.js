
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  // Check if any line contains multiple words separated by spaces
  const hasColumns = lines.every(line => line.trim().split(/\s+/).length > 1);
  // If there are only columns without clear separation into rows, it's likely "COLUMNS"
  if (hasColumns) {
    return "COLUMNS";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
