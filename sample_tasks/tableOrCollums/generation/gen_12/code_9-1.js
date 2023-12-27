
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents columns
  for (let i = 0; i < lines.length; i++) {
    const columns = lines[i].split(/\s{2,}/);
    if (columns.length > 1) {
      return "COLUMNS";
    }
  }

  // If the text does not match the column structure, return "NORMAL"
  return "NORMAL";
}
