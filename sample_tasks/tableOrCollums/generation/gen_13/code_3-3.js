
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  const lines = inputText.split('\n');
  for (const line of lines) {
    if (line.includes('|') && line.includes('-')) {
      return 'TABLE_AND_COLUMNS';
    }
  }
  return 'NORMAL';
}
