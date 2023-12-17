
function doesItContainTableOrColumns(inputText) {
  const lines = inputText.split('\n');
  for (let line of lines) {
    if (line.includes('|') || line.includes('-')) {
      return 'COLUMNS';
    }
  }
  return 'NORMAL';
}
