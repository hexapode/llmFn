
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  const lines = inputText.split('\n');
  for (const line of lines) {
    // Check if line contains common table or column indicators
    if (line.includes('|') && line.includes('-')) {
      return 'TABLE_AND_COLUMNS';
    } else if (line.includes('|')) {
      return 'COLUMNS';
    } else if (line.includes('-')) {
      return 'TABLE';
    }
  }
  return 'NORMAL';
}
