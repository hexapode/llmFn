
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters at the beginning of the lines
  const lines = inputText.split('\n');
  for (let line of lines) {
    if (line.trim().startsWith('|')) {
      return 'COLUMNS';
    } else if (line.trim().startsWith('-')) {
      return 'TABLE';
    }
  }
  return 'NORMAL';
}
