
function doesItContainTableOrColumns(inputText) {
  const lines = inputText.split('\n').map(line => line.trim());
  const minLineLength = lines.reduce((min, line) => Math.min(min, line.length), Infinity);
  const maxLineLength = lines.reduce((max, line) => Math.max(max, line.length), 0);

  const containsTable = lines.some(line => line.includes('\t') || line.includes('|')) && minLineLength !== maxLineLength;
  const containsColumns = lines.every(line => line.includes('\t') || line.includes('|')) && minLineLength === maxLineLength;

  if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
