
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-') && inputText.includes('\n')) {
    let lines = inputText.split('\n');
    let firstLine = lines[0];
    if (firstLine.includes('|') && firstLine.includes('-')) {
      return 'TABLE_AND_COLUMNS';
    } else if (firstLine.includes('|')) {
      return 'COLUMNS';
    } else if (firstLine.includes('-')) {
      return 'TABLE';
    }
  }
  return 'NORMAL';
}
