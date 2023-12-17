
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  const lines = inputText.split('\n');
  for (let line of lines) {
    if (line.includes('|')) {
      return 'COLUMNS';
    }
  }
  return 'NORMAL';
}
