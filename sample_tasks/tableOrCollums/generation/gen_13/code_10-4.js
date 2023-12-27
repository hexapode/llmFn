
function doesItContainTableOrColumns(inputText) {
  const lines = inputText.split('\n').map(line => line.trim());
  const hyphenFound = lines.every(line => line.startsWith('-'));
  if (hyphenFound) {
    return 'TABLE';
  }

  const columnFound = lines.some(line => line.includes('|'));
  if (columnFound) {
    return 'COLUMNS';
  }

  return 'NORMAL';
}
