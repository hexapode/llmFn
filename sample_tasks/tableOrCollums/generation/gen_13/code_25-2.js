
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  // Check if inputText contains any typical table or columns delimiters
  const lines = inputText.split('\n');
  const firstLine = lines[0] ? lines[0].trim() : '';
  
  if (firstLine.startsWith(' ') && firstLine.endsWith(' ')) {
    return 'COLUMNS';
  } else if (inputText.includes('|') && inputText.includes('-')) {
    return 'TABLE_AND_COLUMNS';
  } else if (firstLine.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
